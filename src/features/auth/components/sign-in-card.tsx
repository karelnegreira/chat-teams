import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"


export const SignInCard = () => {
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        Card header
      </CardHeader>
      <CardDescription>
        Use your email or another service to continue
      </CardDescription>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-5 ">

        </form>
      </CardContent>
      Sign in
    </Card>
  )
}


