import LoginForm from "@/components/LoginForm/LoginForm";

export default function SingIn({searchParams,}:{searchParams:{verified:string}}){
  
  const isVerified=searchParams.verified==="true"

  return(
    <>
      <LoginForm isVerified={isVerified} />
    </>
  )
}