import { siteInfo } from "@/constants/lp";

export function Footer() {
  return (
    <footer className="bg-[#3f2a1d] px-5 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-black">{siteInfo.shopName}</p>
          <p className="mt-1 text-sm text-[#ead5bb]">{siteInfo.serviceName}</p>
          <p className="mt-2 text-sm text-[#ead5bb]">{siteInfo.address}</p>
          <p className="text-sm text-[#ead5bb]">{siteInfo.access}</p>
        </div>
        <p className="text-sm text-[#ead5bb]">© {siteInfo.shopName}</p>
      </div>
    </footer>
  );
}
