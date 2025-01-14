import { redirect } from "next/navigation";
import db from "@/libs/bd";
import DashboardBusiness from "@/components/Business/DashBoardBusiness/DashboardBusiness";
import HeaderSection from "@/components/Global/Header/HeaderSection";

export default async function page({
  params,
}: {
  params: Promise<{ businessName: string }>;
}) {
  const businessName = (await params).businessName;

  const business = await db.business.findFirst({
    where: {
      businessname: businessName,
    },
  });

  return (
    <>
      <HeaderSection />
      {business ? <DashboardBusiness busines={business} /> : redirect("/")}
    </>
  );
}
