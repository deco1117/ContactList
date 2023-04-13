import React, {useState, useRef} from 'react';
import foto from '../../assets/images/man.png';
import del from '../../assets/images/delete.svg';
import edit from '../../assets/images/edit.png';
import { ToastContainer, toast } from 'react-toastify';

const index = () => {

const [task, setTask] = useState([]);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');

const addTask = (e) =>{
  e.preventDefault(); 
  const newTask = {
    id: Date.now(),
    name: name,
    email: email,
    phone: phone,
}

if (newTask.name.length===0 || newTask.email.length===0 || newTask.phone.length===0){
  toast.error('Please enter', {
    autoClose: 1000,
    position: 'bottom-right',
    theme: 'primary',
  });

}else{
  setTask([...task,newTask])
  toast.success('Task added',{
    autoClose: 1000,
    position: 'bottom-right',
    theme: 'primary',
  });
}


 
setName('');
setEmail('');
setPhone('');
}

const removeTask = (id) => {
 let filtertask =  task.filter((item)=>{
  return item.id !== id
 })
 setTask(filtertask);
 toast.info('Task removed', {
  autoClose: 1000,
  position: 'bottom-right',
  theme: 'primary',
 });
}


    
    return (
        <>
         <ToastContainer />
            <div>
            <div className="p-5 w-75 shadow m-5 rounded mx-auto">
            <h1 className="text-success fs-4 text-center">Contact List</h1>
            <hr />
            <form action="#" className='form' onSubmit={(e)=>addTask(e)}>
              <label htmlFor="name" className='w-50 d-block mx-auto'>
                <p className="text-primary fw-bold text-uppercase">
                  Name 
                </p>
                <input type="text" id="name"  className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />
              </label>

              <label htmlFor="email" className='w-50 d-block mx-auto my-3'>
                <p className="text-primary fw-bold text-uppercase">
                  Email Address  
                </p>
                <input type="email" id="email"  className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} />
              </label>

              <label htmlFor="phone" className='w-50 d-block mx-auto my-3'>
                <p className="text-primary fw-bold text-uppercase">
                  Phone Number
                </p>
                <input type="tel" id="phone"  className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)} />
              </label>
              <button tyupe="submit" className='btn btn-success d-block mx-auto w-50 p-3'>
                    Add new contact
              </button>
            </form>


        </div>
        <div className="shadow p-5 w-100 mx-auto container">
          <table className='table'>
            <thead>
              <tr><th></th><th>NUM</th><th>NAME</th><th>EMAIL</th><th>PHONE</th><th>DATE OF ADMISSION</th><th></th><th></th></tr>
            </thead>
            {task?.map((item,index)=>{
              return (
                <tbody>
              <tr><th><img src={foto}></img></th><th>{index}</th><th>{item.name}</th><th>{item.email}</th><th>+{item.phone}</th><th>{new Date().toLocaleDateString().padStart(10, '0')}</th><th><img src={edit}></img></th><th><img className='cursor-pointer' src={del} onClick={()=>removeTask(item.id)}></img></th></tr>
              </tbody>
              )
            })
          }
          </table>
        </div>
            </div>    
        </>
    );
};

export default index;