import React,{useState, useRef} from 'react';

const index = () => {

    const [number, setNumber] = useState(10);
    const [lang, setLeng] = useState('ReactJS');
    const [show, setShow] = useState(false);
    const inputRef = useRef('');

    const style = {
        display: show ? 'block' : 'none'
    }



    function INPUT_VALUE() {
        // console.log(inputRef.current.value);
        inputRef.current.focus()
    }


    return (
        <div>
            <button className="btn btn-success m-5" onClick={() => setShow((e) => !e)}>
                {show ? 'show' : 'hide'}
            </button>


            <div className="shadow p-5 w-75 mx-auto m-5">
                <input type="text" className="form-control" placeholder='Emter user name' ref={inputRef} />
                <button className="btn btn-success m-5" onClick={() => setLeng(INPUT_VALUE())}>
                    Input value
                </button>


                <h1 className="text-center">{number} {lang}</h1>
                <button className="btn btn-primary m-5" onClick={() => setNumber(number + 1)}>
                    Incriment
                </button>
                <button className="btn btn-danger m-5" onClick={() => setNumber(number - 1)}>
                    Decriment
                </button>
                <button className="btn btn-success m-5" onClick={() => setLeng('VueJS')}>
                    Edit Text
                </button>
            </div>
        </div>
    );
};

export default index;