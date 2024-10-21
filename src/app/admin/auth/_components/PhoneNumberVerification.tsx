import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState, ChangeEvent, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { adminLogin } from "@/utils/api"
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const UserLogin: React.FC = () => {
  const router = useRouter()
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setUsernameError("");
  };


  useEffect(() => {
    const localStorageData = localStorage.getItem('adminLoginData');
    const cookieData = Cookies.get('adminLoginData');

    if (cookieData) {
      localStorage.setItem('adminLoginData', cookieData || "");
      router.push("/admin/dashboard/upcomingBookings")
    }
  }, []);


  const userAuth = async () => {
    try {
      const response = await adminLogin(username, password);
      localStorage.setItem('adminLoginData', JSON.stringify(response));
      Cookies.set('adminLoginData', JSON.stringify(response), { expires: 7 });
      router.push("/admin/dashboard/upcomingBookings")
    } catch (error) {
      console.error("Error logging in:", error);
      setPasswordError("Invalid username or password");
    }
  }

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleProceed = async () => {
    let valid = true;

    if (!username) {
      setUsernameError("Username is required");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (valid) {
      await userAuth();
    }
  };

  return (
    <div className="flex justify-center md:items-center">
      <div className="mt-8 ml-4 md:mt-0 md:ml-0">
        <div className="flex flex-col w-[20rem] md:w-[24rem] mx-auto items-start gap-12">
          <div>
            <Image
              className="hidden md:flex"
              alt="Logo"
              src="/login/afe_subbrand_logo_horizontal_blue.svg"
              width={354}
              height={40}
            />
            <div className="md:hidden">
              <Image
                className="object-contain cursor-pointer"
                alt="Reshot Icon"
                src="/login/Group(12).svg"
                width={120}
                height={40}
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 self-stretch w-full">
            <div className="relative text-5xl leading-[150%] font-extrabold font-heading4-bold text-midnight-blue-main text-left">
              Login to TIS Admin Portal
            </div>

            {/* Username Field */}
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="username"
                className={`relative text-sm leading-[170%] font-medium font-['Amazon Ember'] ${
                  usernameError ? "text-error-main" : "text-text-primary"
                }`}
              >
                Username
              </label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                className={`pl-4 rounded-full border h-14 text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-hint text-left ${
                  usernameError ? "border-error-main" : "border-web-light-text-primary"
                }`}
                value={username}
                onChange={handleUsername}
              />
              {usernameError && (
                <span className="text-error-main text-sm">
                  {usernameError}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="password"
                className={`relative text-sm leading-[170%] font-medium font-['Amazon Ember'] ${
                  passwordError ? "text-error-main" : "text-text-primary"
                }`}
              >
                Password
              </label>
              <div className="relative w-full">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`pl-4 pr-10 rounded-full border h-14 text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-hint text-left ${
                    passwordError
                      ? "border-error-main"
                      : "border-web-light-text-primary"
                  }`}
                  value={password}
                  onChange={handlePassword}
                />
                {/* Eye Icon to Toggle Password Visibility */}
                <div
                  className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {!showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </div>
              {passwordError && (
                <span className="text-error-main text-sm">
                  {passwordError}
                </span>
              )}
            </div>

            {/* Proceed Button */}
            <div className="w-full fixed bottom-0 mb-4 px-4 md:mb-0 md:px-0 left-0 md:static">
              <Button
                onClick={handleProceed}
                className="w-full h-14 rounded-full bg-incandescent-main text-web-light-background-default font-button1-bold text-lg leading-[170%] hover:bg-incandescent-main hover:text-web-light-background-default"
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;


