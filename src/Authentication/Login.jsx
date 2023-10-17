import { useContext, useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
    const {signIn}=useContext(AuthContext)
    const handleLogin= event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user)
        })
    }

    
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://www.snexplores.org/wp-content/uploads/2020/11/1030_teen_brain_food_choices-1030x580.jpg')",
        }}
      >
        <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              <img src="" className="mb-3" />
              <h1 className="mb-3 font-bold text-5xl">
                Hi ? Welcome to Hungry Food Web Site
              </h1>
              <p className="pr-3">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups
              </p>
            </div>
          </div>
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Sign In{" "}
                </h3>
                <p className="text-gray-500">Please sign in to your account.</p>
              </div>
              <form onSubmit={handleLogin}>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Email
                    </label>
                    <input
                      className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      type="email"
                      name="email"
                      placeholder="mail@gmail.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                      Password
                    </label>
                    <input
                      className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                      Captcha
                    </label>
                    < LoadCanvasTemplate />
                    <input
                      className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      type="text"
                      name="captcha"
                      placeholder="Input Your Captcha"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-800">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="text-green-400 hover:text-green-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Login"
                      className="w-full flex justify-center bg-green-400  hover:bg-yellow-600 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
