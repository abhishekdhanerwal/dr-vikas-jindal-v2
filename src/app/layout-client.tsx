"use client";

import { ReactNode, Suspense } from "react";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";


export default function LayoutClient({ children }: { children: ReactNode }) {
    return (
    <Suspense><AppRouterCacheProvider>
        <Header />
        <div className="pageContent">
            {children}
        </div>
        <Footer />
    </AppRouterCacheProvider></Suspense>)
}