import Input from "@/components/input/input";
import Button from "@/components/button";
import Loading from "@/components/loading";
import { NavigationSidebar } from "@/components/navigation/navigationSidebar";
import ScoreValutJson from "@/contracts/mock/ScoreVault.sol/ScoreVault.json";
import { SCOREVAULT_CONTRACT_ADDRESS } from "@/utils/contants";
import { readContract } from "@wagmi/core";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Verify() {
  const [isLoading, setIsLoading] = useState(false);

  const [score, setScore] = useState('');
  const [to, setTo] = useState('');

  /**
   * verify method
   */
  const verify = async () => {
    setIsLoading(true);
    try {

      const resRead = await readContract({
        address: SCOREVAULT_CONTRACT_ADDRESS,
        abi: ScoreValutJson.abi,
        functionName: "getScore",
        args: [to]
      }) as any;
      console.log("result:", resRead);
      const encryptedTotalScore = resRead[0];
      const encryptedCount = resRead[1];
      console.log("encryptedTotalScore:", encryptedTotalScore);

      const sampleValue = {
        name: "mame3",
        totalScore: "6372169231563658595",
        totalEvaluater: "121016624988591087",
        lineNumber: "10",
      };
      console.log("score:", score);
      const response = await fetch('/api/isAbove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: sampleValue.name,
          totalScore: encryptedTotalScore,
          // totalEvaluater: "4982023261627043412",
          totalEvaluater: encryptedCount,
          lineNumber: score,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result); // ここで取得した結果を使用する
      // 例: 結果に応じてUIを更新
      if (result.isAbove) {
        console.log("結果は上です。");
        toast.success('🦄 Above the Score!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        console.log("結果は下または同等です。");
        toast.success('🦄 Under the score...', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      toast.error('Failed...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-screen w-screen flex flex-row sm:flex-col-reverse">
      <NavigationSidebar />
      <div className="h-full p-20 bg-white sm:p-10 xs:p-5
      w-[calc(100%-296px)] lg:w-[calc(100%-204.9px)] md:max-w-[calc(100%-192px)] sm:min-w-full">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <Loading />
          </div>
        ) : (
          <div className="h-full min-h-[450px] w-full rounded-2xl flex flex-col justify-between place-items-center py-20 px-10 text-center shadow-lg 
          sm:py-7 xs:px-4">
            <h1 className="text-Primary10 text-Title">Verification</h1>

            <div className="w-[60%] h-[46%] min-h-48 max-h-64 flex flex-col justify-between space-y-2
            md:w-[80%] sm:min-w-full">
              <Input
                labelText="Address"
                id="Address"
                type="text"
                autoCorrect="off"
                autoCapitalize="off"
                autoComplete="off"
                icon="AddressIcon"
                value={to}
                onChange={setTo}
              />
              <Input
                labelText="Score"
                id="Score"
                type="text"
                autoCorrect="off"
                autoCapitalize="off"
                autoComplete="off"
                icon="ScoreIcon"
                value={score}
                onChange={setScore}
              />
            </div>
            <div>
              <Button 
                onClick={async () => { await verify() }}
                buttonLabel="Verify"/>
            </div>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
