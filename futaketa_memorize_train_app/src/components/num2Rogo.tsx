
import goroData from "../goro.json";
import "./num2Rogo.css";
interface GoroDataJson {
    [numStr: string]: string;
};

type Num2RogoProps = {
    dispInt: number;
    showAnswer: boolean;
};

function Num2Rogo({dispInt, showAnswer}: Num2RogoProps) {
    const jsonGoroData: GoroDataJson = goroData;

    const n_str: string = `0${dispInt}`.slice(-2);
    console.log(goroData);
    const rogo_str: string = jsonGoroData[n_str];
    //const rogo_str: string = "aa";

    return (
        <>
            <div>
                {dispInt}<br />
                <div
                    className="divAnswer"
                >
                    {showAnswer &&
                        (
                            <>
                                {rogo_str}<br />
                                <img
                                    src={`./images/${n_str}.png`}
                                    alt={rogo_str}
                                    height={200}
                                />
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Num2Rogo;
