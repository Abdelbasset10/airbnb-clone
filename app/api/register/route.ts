import prisma from '../../lib/prismadb'
import bcrypt from 'bcrypt'

export const POST = async (req : Request) => {
    const {email,name,password} = await req.json()
    const isExistUser = await prisma.user.findUnique({
        where : {
            email:email
        }
    })
  
    const hashedPassword = await bcrypt.hash(password,12)
    const newUser = await prisma.user.create({
        data : {
            email,
            name,
            hashedPassword
        }
    }
    )
    return new Response(JSON.stringify(newUser),{status:201})
}