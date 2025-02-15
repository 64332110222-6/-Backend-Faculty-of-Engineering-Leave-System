const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function level() {

    const Individual = await prisma.levels.upsert({
        where: { id: 1 },
        update: {},
        create: { level: 'ระดับบุคคล' },
    });
    const Advisor = await prisma.levels.upsert({
        where: { id: 2 },
        update: {},
        create: { level: 'หัวหน้าภาควิชา' },
    });
    const Faculty = await prisma.levels.upsert({
        where: { id: 3 },
        update: {},
        create: { level: 'ระดับคณะ' },
    });
    const University = await prisma.levels.upsert({
        where: { id: 4 },
        update: {},
        create: { level: 'ระดับมหาวิทยาลัย' },
    });

    console.log({ Individual, Advisor, Faculty, University });
}

async function personnelType() {
    const CivilServants = await prisma.personnelTypes.upsert({
        where: { id: 1 },
        update: {},
        create: { name: "ข้าราชการพลเรือนในสถาบันอุดมศึกษา" }  
    });
    const Permanent = await prisma.personnelTypes.upsert({
        where: { id: 2 },
        update: {},
        create: { name: 'ลูกจ้างประจำ' },
    });
    const Government = await prisma.personnelTypes.upsert({
        where: { id: 3 },
        update: {},
        create: { name: 'พนักงานราชการ' },
    });
    const EmployeesInHigherEdu = await prisma.personnelTypes.upsert({
        where: { id: 4 },
        update: {},
        create: { name: 'พนักงานในสถาบันอุดมศึกษา' },
    });
    const RevenueBased = await prisma.personnelTypes.upsert({
        where: { id: 5 },
        update: {},
        create: { name: 'ลูกจ้างเงินรายได้' },
    });

    console.log({ Permanent, Government, EmployeesInHigherEdu, RevenueBased });
}

async function department() {
    const Civil = await prisma.departments.upsert({
        where: { id: 1 },
        update: {},
        create: { name: 'สาขาวิชาวิศวกรรมโยธา' },
    });
    const Electrical = await prisma.departments.upsert({
        where: { id: 2 },
        update: {},
        create: { name: 'สาขาวิชาวิศวกรรมไฟฟ้า' },
    });
    const Electronics = await prisma.departments.upsert({
        where: {id: 3},
        update: {},
        create: { name: 'สาขาวิชาวิศวกรรมอิเล็กทรอนิกส์ฯ' },
    });
    const Computer = await prisma.departments.upsert({
        where: {id: 4},
        update: {},
        create: { name: 'สาขาวิชาวิศวกรรมคอมพิวเตอร์' },
    });
    const Mechatronics = await prisma.departments.upsert({
        where: {id: 5},
        update: {},
        create: {name: 'สาขาวิชาวิศวกรรมเมคคาทรอนิกส์'},
    });
    const Mechanical = await prisma.departments.upsert({
        where: {id: 6},
        update: {},
        create: {name: 'สาขาวิชาวิศวกรรมเครื่องกล'},
    });
    const AgriculturalMachinery = await prisma.departments.upsert({
        where: {id: 7},
        update: {},
        create: {name: 'สาขาวิชาวิศวกรรมเครื่องจักรกลเกษตร'},
    });
    const FoodAndBioprocess = await prisma.departments.upsert({
        where: {id: 8},
        update: {},
        create: {name: 'สาขาวิชาวิศวกรรมอาหารและชีวภาพ'},
    });
    const Industrial = await prisma.departments.upsert({
        where: {id: 9},
        update: {},
        create: {name: 'สาขาวิชาวิศวกรรมอุตสาหการ'},
    });
    const Metallurgical = await prisma.departments.upsert({
        where: {id: 10},
        update: {},
        create: {name: 'สาขาวิชาวิศวกรรมโลหการ'},
    });
    const Chemistry = await prisma.departments.upsert({
        where: {id: 11},
        update: {},
        create: {name: 'สาขาวิชาสาขาวิชาเคมี'},
    });
    const Mathematics = await prisma.departments.upsert({
        where: {id: 12},
        update: {},
        create: {name: 'สาขาวิชาคณิตศาสตร์'},
    });
    const AppliedPhysics = await prisma.departments.upsert({
        where: {id: 13},
        update: {},
        create: {name: 'สาขาวิชาฟิสิกส์ประยุกต์'},
    });
    const AppliedStatistics = await prisma.departments.upsert({
        where: {id: 14},
        update: {},
        create: {name: 'สาขาวิชาสถิติประยุกต์'},
    });

    console.log({ Civil, Electrical, Electronics, Computer, Mechatronics, Mechanical, AgriculturalMachinery, FoodAndBioprocess, Industrial, Metallurgical, Chemistry, Mathematics, AppliedPhysics, AppliedStatistics });
}

async function leaveType() {
    // not complete
    const SickLeave = await prisma.leaveTypes.upsert({
        where: { id: 1 },
        update: {},
        create: { 
            data: {
                name: 'ลาป่วย',
                maxDays: 30,
                conditions: JSON.stringify({
                    requireDocument: { minDays: 2, documentType: 'ใบรับรองแพทย์' },
                    advanceNoticeDays: { required: false, ifKnown: 3 },
                    maxDaysPerRequest: 7,
                    maxDaysPerYear: 30,
                    allowEmergency: true,
                    emergencyPolicy: { notifyLater: true, gracePeriodDays: 3 }
                })
            }
         }
    });
    // ลูกจ้างประจำ 
    const PersonalLeave = await prisma.leaveTypes.upsert({
        where: { id: 2 },
        update: {},
        create: {
            data: {
                name: 'ลากิจส่วนตัว',
                maxDays: 45,
                conditions: JSON.stringify({
                    requireDocument: {
                        mandatory: true,
                        forReasons: ["เลี้ยงดูบุตร", "งานส่วนตัว", "ธุระสำคัญ"],
                        documentTypes: ["ใบลา", "เอกสารชี้แจง"]
                    },
                    advanceNoticeDays: { required: true, days: 3 },
                    maxDaysPerRequest: 5,
                    maxDaysPerYear: 45,
                    allowEmergency: true,
                    emergencyPolicy: { notifyLater: true, gracePeriodDays: 1 }, 
                    limitedReasons: ["เลี้ยงดูบุตร", "ธุระส่วนตัว"],
                    disallowedReasons: ["ท่องเที่ยว", "เหตุผลส่วนตัวที่ไม่จำเป็น"],
                    specialConditions: {
                        firstYear: {
                            maxDaysPerYear: 15,
                            allowedWithoutPay: true,
                        },
                        afterFirstYear: {
                            additionalDays: 30,
                            allowedWithPay: true,
                        },
                        maternityToChildcare: {
                            maxDays: 150,
                            allowedWithoutPay: true,
                        }
                    }
                })
            }
        }
    });
}

async function main() {
    await level();
    await personnelType();
    await department();
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect()
        process.exit(1);
    });