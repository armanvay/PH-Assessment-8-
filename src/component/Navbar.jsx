"use client";

import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logos from "@/acsst/logo.png";
import { authClient } from "@/lib/auth-client";
import { Puff } from "react-loader-spinner";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { toast } from "react-toastify";

const Navbar = () => {
  const pathname = usePathname();
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const [open, setOpen] = useState(false);

  const handellogout = async () => {
    await authClient.signOut();
    toast.success("Logout successFull")
    setOpen(false);
  };

  const closeMenu = () => setOpen(false);

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image alt="logo" width={60} height={80} src={logos} />
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            SkillSphere
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link
            href="/"
            className={
              isActive("/") ? "text-indigo-600 font-bold underline" : ""
            }
          >
            Home
          </Link>

          <Link
            href="/courses"
            className={
              isActive("/courses") ? "text-indigo-600 font-bold underline" : ""
            }
          >
            Courses
          </Link>

          <Link
            href="/profile"
            className={
              isActive("/profile") ? "text-indigo-600 font-bold underline" : ""
            }
          >
            My Profile
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {isPending ? (
            <Puff height="35" width="35" color="#9C908E" />
          ) : !user ? (
            <>
           
              <Link href="/login">
                <Button>Login</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </>
          ) : (
            <>
              <Button>Hi {user?.name}</Button>
              <Avatar>
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>{user?.name}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handellogout} variant="danger">
                Logout
              </Button>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 bg-white shadow space-y-4">
          {/* Nav Links */}
          <div className="flex flex-col gap-3 font-medium">
            <Link
              onClick={closeMenu}
              href="/"
              className={
                isActive("/") ? "text-indigo-600 font-bold underline" : ""
              }
            >
              Home
            </Link>

            <Link
              onClick={closeMenu}
              href="/courses"
              className={
                isActive("/courses")
                  ? "text-indigo-600 font-bold underline"
                  : ""
              }
            >
              Courses
            </Link>

            <Link
              onClick={closeMenu}
              href="/profile"
              className={
                isActive("/profile")
                  ? "text-indigo-600 font-bold underline"
                  : ""
              }
            >
              My Profile
            </Link>
          </div>

          <hr />

          {/* Auth Section */}
          {isPending ? (
            <Puff height="35" width="35" color="#9C908E" />
          ) : !user ? (
            <div className="flex flex-col gap-3">
              <Link onClick={closeMenu} href="/login">
                Login
              </Link>
              <Link onClick={closeMenu} href="/register">
                Register
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {/* User Info */}
              <div className="flex items-center gap-2">
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                </Avatar>
                <span className="font-medium">{user?.name}</span>
              </div>

              {/* Logout */}
              <Button onClick={handellogout} variant="danger">
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
