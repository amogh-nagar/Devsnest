import Row from "./Row"

const Box = () => {

    let arr=[]


    for(let i=0;i<8;i++){
        arr.push(<Row/>)
   }

    return (
        <div className="box">
            {arr}
        </div>
    )
}

export default Box
