import { Table } from "@/components/table";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense key={"table-info"} fallback={"Loading..."}>
        <Table />
      </Suspense>
    </>
  );
}
