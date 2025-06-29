"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

  // Handle form submission logic here
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="border-0 shadow-xl bg-white">
        <CardHeader className="text-center pb-4">
          <Image
            src={"/miku.jpg"}
            height={64}
            width={64}
            alt="miku logo"
            className="rounded-2xl mx-auto mb-2"
          />
          <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">
            Register
          </CardTitle>
          <p className="text-gray-600">
            Create a new account to start creating teams.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="h-12 rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-12 rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500/20 transition-all pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <Image
                      src={"/eyeOff.svg"}
                      height={20}
                      width={20}
                      alt="Hide password"
                      className="w-5 h-5"
                    />
                  ) : (
                    <Image
                      src={"/eye.svg"}
                      height={20}
                      width={20}
                      alt="Show password"
                      className="w-5 h-5"
                    />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="passwordConfirm"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="passwordConfirm"
                  type={showPasswordConfirm ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="h-12 rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500/20 transition-all pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPasswordConfirm ? (
                    <Image
                      src={"/eyeOff.svg"}
                      height={20}
                      width={20}
                      alt="Hide password"
                      className="w-5 h-5"
                    />
                  ) : (
                    <Image
                      src={"/eye.svg"}
                      height={20}
                      width={20}
                      alt="Show password"
                      className="w-5 h-5"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <Button className="w-full h-12 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:cursor-pointer">
            Create Account
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
