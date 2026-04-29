"use client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logos from "@/acsst/logo.png"
import { authClient } from "@/lib/auth-client";





const Navbar = () => {
   const userData = authClient.useSession();
   const user = userData.data?.user;
   console.log(user)
   

const handellogout=async()=>{
  await authClient.signOut();
}


  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image alt="logo" width={60} height={80} src={logos}></Image>
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            SkillSphere
          </Link>
        </div>

        <div className="md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link href="/courses" className="hover:text-indigo-600 transition">
            Courses
          </Link>
          <Link href="/profile" className="hover:text-indigo-600 transition">
            My Profile
          </Link>
        </div>

        {/* Buttons */}
        {!user ? (
          <div className=" md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="outline">Register</Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Avatar>
              <Avatar.Image alt={user?.name} src={user?.image} />
              <Avatar.Fallback>{user?.name}</Avatar.Fallback>
            </Avatar>
              <Button onClick={handellogout} variant="danger">Logout</Button>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
