import React from "react";
import { Icon } from "@iconify/react";
import "../components/ProfileImages.jsx";
export default function Search({ searchInputValue }) {
    return (
        <div data-testid="search">
            <div className="bg-[#1a1a1a] h-screen">
                <div className="max-w-screen-md mx-auto text-xl text-white" >
                    <h4 >
                        ค้นหาตามมาตรา
                    </h4>
                    <div className="border-b border-gray-500 flex items-center">
                        <div className="pr-2">
                            <Icon icon="material-symbols:history" className="text-2xl"/>
                        </div>
                        search result {searchInputValue}
                    </div>
                    <h4 className="pt-4">
                        ค้นหาตามผู้อภิปราย
                    </h4>
                </div>
            </div>
        </div>
    );
}
