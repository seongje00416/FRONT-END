import { useState, useEffect } from "react";
import { getByCustomerId, pass } from "./Reward";

const GetMyRewards = () => {
    const [ rewards, setRewards ] = useState( [] );

    useEffect( () => {
        getByCustomerId().then( (res) => { setRewards( res.data.data ); });
    }, [] );

    const onSubmitHandlePass = (index) => {
        pass(index).then((res) => alert(res.data.message));
    };

    return (
        <div>
            <div> 보상 신청이 가능한 상품 목록 </div>
            {rewards && rewards.map((user, index) => {
                return (
                    <div key={index}>
                        <div>===============================================================================</div>
                        {user && Object.entries(user).map(([key, value]) => (
                            <div key={key}>{`${key} : ${value}`}</div>

                        ))}
                    </div>
                );
            })}
        </div>
    );
};
export default GetMyRewards;