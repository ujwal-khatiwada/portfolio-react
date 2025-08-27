// "use client";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation"; // ✅ import this

// const Mailnotify = () => {
//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");
//   const [email, setEmail] = useState("");
//   const searchParams = useSearchParams();

// // Check if verification was successful
//   useEffect(() => {
//     if (searchParams.get("verified") === "true") {
//       setSuccessMsg("Your email has been verified! You’re all set to be among the first to experience our new look.");
//     }
//   }, [searchParams]);


//  const handleNotify = async () => {
//     if (!email) return setSuccessMsg("Please enter your email!");

//     setLoading(true);

//     try {
//       // Send request with custom header
//       const res = await fetch("/api/sendVerification", {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json",
//           "x-site": window.location.origin // current site origin
//         },
//         body: JSON.stringify({ 
//           email,
//           redirectUrl: window.location.href // full URL of current page
//         }),
//       });


//       const data = await res.json();

//       if (data.success) {
//         setSuccessMsg("Check your inbox and verify your email!");
//         setEmail(""); // clear input
//       } else {
//         setSuccessMsg("Something went wrong. Try again!!!!");
//       }
//     } catch (err) {
//       console.error(err);
//       setSuccessMsg("Something went wrong. Try again!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <div className="flex flex-col sm:flex-row gap-2">
//         <input
//           type="email"
//           placeholder="Enter your email for early access"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="flex-1 px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none text-sm sm:text-base"
//         />
//         <button
//           onClick={handleNotify}
//           disabled={loading}
//           className="bg-black text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 transition disabled:opacity-50"
//         >
//           {loading ? "Submitting..." : "NOTIFY ME"}
//         </button>
//       </div>
//       {successMsg && (
//         <p className="text-green-600 mt-1 text-sm">{successMsg}</p>
//       )}
//     </div>
//   );
// };

// export default Mailnotify;



"use client";
import { useState } from "react";

const Mailnotify = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [token, setToken] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const sendToken = async () => {
    if (!email) return setSuccessMsg("Please enter your email!");
    setLoading(true);
    try {
      const res = await fetch("/api/sendVerification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setOtpSent(true);
        setSuccessMsg("Check your inbox for the verification code!");
      } else if (data.error === "Email already registered") {
        setSuccessMsg("Our New Look is Almost Here! You’re already registered and will be among the first to experience our new look.");
      }  else {
        setSuccessMsg("Something went wrong. Try again!");
      }
    } catch (err) {
      console.error(err);
      setSuccessMsg("Something went wrong. Try again!");
    }
    setLoading(false);
  };

  const verifyToken = async () => {
    if (!token) return setSuccessMsg("Enter the code you received!");
    setLoading(true);
    try {
      const res = await fetch("/api/verifyToken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg("Your email has been verified! You’re all set to be among the first to experience our new look.");
        setOtpSent(false);
        setEmail("");
        setToken("");
      }else {
        setSuccessMsg("Something went wrong. Try again!");
      }

    } catch (err) {
      console.error(err);
      setSuccessMsg("Something went wrong. Try again!");
    }
    setLoading(false);
  };

  return (
    <div>
       <div className="flex flex-col sm:flex-row gap-2">
        {!otpSent ? (
          <>
            {/* <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> */}
            <input
              type="email"
              placeholder="Enter your email for early access"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none text-sm sm:text-base"
            />
            {/* <button onClick={sendToken} disabled={loading}>
              {loading ? "Sending..." : "Send verification email"}
            </button> */}
            <button
              onClick={sendToken }
              disabled={loading}
              className="bg-black text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Get otp"}
          </button>
          </>
          ) : (
            <div className="flex flex-1 gap-2">
              <input
                type="text"
                placeholder="Enter the code"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              className="flex-1 px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none text-sm sm:text-base"
              />
              <button 
                onClick={verifyToken} 
                disabled={loading}
              className="bg-black text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Verify"}
              </button>
            </div>
        )}
      </div>
      {successMsg && (
        <p className="text-green-600 mt-1 text-sm">{successMsg}</p>
      )}
    </div>
    
  );
};

export default Mailnotify;
