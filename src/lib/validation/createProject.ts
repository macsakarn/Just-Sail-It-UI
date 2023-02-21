import { z } from 'zod'

export const createProjectSchema = z.object({
	name: z.string().trim().min(1, { message: 'กรุณากรอกข้อมูล ชื่อโครงการ' }),
	category: z.string().trim().min(1, { message: 'กรุณากรอกเลือกหมวดหมู่' }),
	description: z.string().trim().min(1, { message: 'กรุณากรอกคำอธิบาย' }),
	story: z.string().trim().min(1, { message: 'กรุณากรอกคำเรื่องราว' }),
	goal: z.number().min(0.01, { message: 'เป่าหมายขั้นต่ำ 0.01 ETH' }),
	start_fund: z.string().min(1, { message: 'กรุณากรอกวันเริ่มต้นโครงการ' }),
	end_fund: z.string().min(1, { message: 'กรุณากรอกวันสิ่นสุดโครงการ' })
})
