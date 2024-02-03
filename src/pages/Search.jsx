import React from "react";
import "../components/ProfileImages.jsx";
export default function Search() {
    return (
        <div data-testid="search">
            <div className="bg-[#1a1a1a] h-screen">
                <div className="max-w-screen-md mx-auto text-xl text-white" >
                    <h4 >
                        ค้นหาตามมาตรา
                    </h4>
                    <h4>
                        ค้นหาตามผู้อภิปราย
                    </h4>
                </div>
            </div>
        </div>
    );
}
