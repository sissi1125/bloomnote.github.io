'use client';
import { useCallback, useState } from 'react';

import React from 'react';
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import Link from 'next/link';

export default function Faq() {
  const [showEmailModal, setShowEmailModal] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <div className="bg-[#F9F4EF]">
    <Navbar isBordered position={'sticky'}>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
         
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <div className='h-full'>dfsdfsfd

      <div className='mt-96'>dfsdffythy</div>
      <div className='mt-96'>dfsdffythy</div>
    </div>
    </div>
  );
}
