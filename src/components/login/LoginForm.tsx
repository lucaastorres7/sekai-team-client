"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <form>
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
            Login
          </CardTitle>
          <p className="text-gray-600">
            Enter your credentials to create your teams!
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
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

            <div className="text-center">
              <Link
                href="login/forgot-password"
                className="text-sm text-teal-600 hover:text-teal-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <Button className="w-full h-12 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all hover:cursor-pointer">
            Login
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              {"Don't have an account? "}
              <Link
                href="/login/register"
                className="text-teal-600 hover:text-teal-700 font-semibold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
