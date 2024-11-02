"use client";

import { Card } from "@/components/ui/card";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SocialAccountCard = () => {
  const [connectedAccounts, setConnectedAccounts] = useState({
    Facebook: true,
    Instagram: false,
    Twitter: true,
    TikTok: false,
    WhatsApp: true,
  });

  const toggleConnection = (platform) => {
    setConnectedAccounts((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }));
  };

  const socialAccounts = [
    { icon: <FaFacebookF />, name: "Facebook" },
    { icon: <FaInstagram />, name: "Instagram" },
    { icon: <FaTwitter />, name: "Twitter" },
    { icon: <IoLogoTiktok />, name: "TikTok" },
    { icon: <FaWhatsapp />, name: "WhatsApp" },
  ];

  return (
    <Card className="p-6 rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Manage Social Accounts</h1>
      {socialAccounts.map((account) => (
        <div key={account.name} className="flex items-center justify-between py-3 border-b border-gray-300">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-white shadow-md">
              {account.icon}
            </div>
            <p className="text-lg font-medium">{account.name}</p>
          </div>
          <Button
            variant={connectedAccounts[account.name] ? "filled" : "outline"}
            className={`transition-colors duration-200 ${connectedAccounts[account.name] ? 'bg-red-600 text-white hover:bg-red-700' : 'text-indigo-600 border-indigo-600 hover:bg-indigo-50'}`}
            onClick={() => toggleConnection(account.name)}
          >
            {connectedAccounts[account.name] ? "Disconnect" : "Connect"}
          </Button>
        </div>
      ))}
    </Card>
  );
};

export default SocialAccountCard;
