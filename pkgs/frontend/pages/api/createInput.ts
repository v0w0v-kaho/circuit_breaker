import fs from 'fs';
import path from 'path';

function bigintToJson(key: any) {
    return JSON.stringify(key, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    );
}

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    // クライアントからのデータを取得
    const { totalScore, totalEvaluater, lineNumber, name } = req.body;

    // private.json と public.json のパスを取得
    const priKeyPath = path.join(process.cwd(), 'data', `${name}-privateKey.json`);
    const pubKeyPath = path.join(process.cwd(), 'data', `${name}-publicKey.json`);

    // ファイルからデータを読み込む
    const privateKeyData = JSON.parse(fs.readFileSync(priKeyPath, 'utf8'));
    const publicKeyData = JSON.parse(fs.readFileSync(pubKeyPath, 'utf8'));

    // 必要なデータを抽出
    const { lambda: decriptionKeyLambda, mu: decriptionKeyMu } = privateKeyData;
    const { n: encryptionKeyN } = publicKeyData;

    // レスポンスとして返すJSONオブジェクトを作成
    const responseObject = {
      totalScore,
      totalEvaluater,
      lineNumber,
      encryptionKeyN,
      decriptionKeyLambda,
      decriptionKeyMu
    };

    const inputPath = path.join(process.cwd(), 'data', `${name}-input.json`);

    // Asynchronously write the keys to their respective files in JSON format.
    // await writeFile(inputPath, bigintToJson(responseObject), 'utf8');

    // レスポンスを送信
    res.status(200).json(responseObject);
  } else {
    // POST以外のメソッドを受け付けない場合
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
