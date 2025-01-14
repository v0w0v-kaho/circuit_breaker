// pages/api/decrypt.js
import { readFile } from 'fs/promises';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as paillierBigint from 'paillier-bigint';
import path from 'path';

// API endpoint for decrypting a given encrypted number using the Paillier cryptosystem.
export default async function decrypt(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            // Extract the encrypted number and the user's name from the request body.
            const { encNum, name } = req.body;
            const encrypted = BigInt(encNum);
  
            // Construct the file paths for the private and public keys based on the user's name.
            const priKeyPath = path.join(process.cwd(), 'data', `${name}-privateKey.json`);
            const pubKeyPath = path.join(process.cwd(), 'data', `${name}-publicKey.json`);
  
            // Read and parse the private key from its file.
            const privateKeyJson = await readFile(priKeyPath, 'utf8');
            const privateKeyObj = JSON.parse(privateKeyJson);

            // Read and parse the public key from its file (needed for decryption).
            const publicKeyJson = await readFile(pubKeyPath, 'utf8');
            const publicKeyObj = JSON.parse(publicKeyJson);

            // Deserialize the public and private keys from their JSON objects.
            const publicKey = new paillierBigint.PublicKey(
                BigInt(publicKeyObj.n),
                BigInt(publicKeyObj.g)
            );
            const privateKey = new paillierBigint.PrivateKey(
                BigInt(privateKeyObj.lambda),
                BigInt(privateKeyObj.mu),
                publicKey
            );
  
            // Decrypt the encrypted number using the private key.
            const decrypted = privateKey.decrypt(encrypted);
      
            // Respond with the decrypted number.
            res.status(200).json({
                decrypted: decrypted.toString(),
            });
        } catch (error) {
            // Log the error and respond with a 500 Internal Server Error status code if an exception occurs.
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // If the request method is not POST, set the Allow header to POST and respond with a 405 Method Not Allowed status code.
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
