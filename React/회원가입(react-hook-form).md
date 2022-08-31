# 🚀react-hook-form 라이브러리를 이용한 회원가입 기능 구현

```tsx
import {useForm} from "react-hook-form"

interface IForm {
    email : string;
    firstName : string;
    lastName : string;
    userName : string;
    password : string;
    password1 : string;
    extraError ?: string; //서버가 다운될 것을 방지하기 위해서
}

function ToDoList() {
    const {register, handleSubmit, formState:{errors},setError} = useForm<IForm>({
        defaultValues : {
            email : "@naver.com"
        }
    });

    const onValid = (data:IForm) => {
        if(data.password !== data.password1){
            setError("password1",
            { message : "Password are not the same" },
            {shouldFocus : true} //에러가 발생 시 해당 password1으로 이동될 것이다.
            )
        }
        // setError("extraError",{message : "Server offline."});
    }

    console.log(errors)

    return (
        <div>
            <form
            style ={{display:"flex",flexDirection:"column"}} 
            onSubmit={handleSubmit(onValid)}
            >
                <input {...register("email",{ 
                    required : {
                        value : true,
                        message : "Email is required"
                    } ,
                    pattern : {
                        value : /^[A-Za-z0-9._$+-]+@naver.com$/,
                        message : "Only naver.com emails allowed"
                 },
                 })} 
                 placeholder = "Email" 
                 />
                 <span>
                    {errors?.email?.message}
                 </span>
                {/* HTML 속성에 의지하는게 아니라, 자바스크립트를 사용해서 validation을 실행하고 있다. */}
                <input {...register("firstName",{
                    required : "write here",
                    validate:{
                        noNico : (value) => value.includes("nico") ? "no nicos allowed" : true,
                        noNick : (value) => value.includes("nick") ? "no nicks allowed" : true,
                    }                    
                    // validate : (value) => "hello"
                    })}
                    placeholder = "First Name" />
                <span>
                    {errors?.firstName?.message}
                </span>
                <input {...register("lastName",{ required : "write here" })} placeholder = "Last Name" />
                <span>
                    {errors?.lastName?.message}
                </span>
                <input {...register("userName",{ required : {
                    value: true,
                    message : "write here"
                }, minLength:{
                    value : 5,
                    message : "Your userName is too short"
                } })} placeholder= "User Name" />
                <span>{errors?.userName?.message}</span>
                {/* minLength속성은 onSubmit 함수의 if조건식을 대체한다. */}
                <input {...register("password",{ required : "write here", minLength:{
                    value : 5,
                    message : "Your password is too short"
                } })} placeholder = "Password" />
                <span>{errors?.password?.message}</span>
                <input {...register("password1",{ required : "Password is required", minLength:{
                    value : 5,
                    message : "Your password is too short."
                } })} placeholder = "Password1" />
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
                {/* <span>{errors?.extraError?.message}</span> */}
            </form>
        </div>
    )
}

export default ToDoList;

```