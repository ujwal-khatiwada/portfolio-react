import { Suspense } from "react";
import VerifyPage from "./VerifyPage";

export default function Page() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading verification...</p>}>
      <VerifyPage />
    </Suspense>
  );
}
