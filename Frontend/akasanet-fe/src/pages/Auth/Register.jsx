import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center bg-gray-200 h-screen">
      <div className="bg-white rounded-xl w-full mx-12 lg:mx-24">
        <div className="grid lg:grid-cols-2 gap-2">
          <div className="flex justify-center items-center rounded-xl max-lg:hidden">
            <img src="../images/Auth1.avif" alt="" className="mx-auto w-4/5" />
          </div>
          <div className="grid items-center px-10 py-8 bg-[#77E4C8] rounded-r-lg">
            <div className="grid items-center mb-8">
              <h1 className="text-4xl font-bold font-cursive">Register</h1>
            </div>
            <div className="my-6 lg:m-0">
              <form action="">
                <Label className="text-base">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className="my-3"
                  placeholder="Name"
                  required
                />
                <Label className="text-base">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="my-3"
                  placeholder="example@gmail.com"
                  required
                />
                <Label className="text-base">Password</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="my-3"
                    placeholder="Password"
                    required
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? (
                      <EyeOff className="h-6 w-6 text-gray-500" />
                    ) : (
                      <Eye className="h-6 w-6 text-gray-500" />
                    )}
                  </div>
                </div>
                <Link to="/login">
                  <Button
                    variant="default"
                    type="submit"
                    className="w-full mt-2"
                  >
                    Register
                  </Button>
                </Link>
              </form>
            </div>
            <div className="flex justify-center items-center">
              <p>Already have an account?</p>
              <Link to="/login">
                <Button variant="link">Sign In Here</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
