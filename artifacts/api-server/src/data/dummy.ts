export interface Student {
  id: string;
  name: string;
  nameUr?: string | null;
  email: string;
  phone: string;
  classId: string;
  className: string;
  enrollDate: string;
  guardianName: string;
  guardianPhone?: string | null;
  status: string;
  grade?: string | null;
  attendance: number;
  address?: string | null;
  notes?: string | null;
}

export interface Teacher {
  id: string;
  name: string;
  nameUr?: string | null;
  email: string;
  phone: string;
  subjects: string[];
  classes: string[];
  qualification: string;
  hireDate: string;
  status: string;
  specialization?: string | null;
  experience?: number | null;
}

export interface Assignment {
  id: string;
  title: string;
  titleUr?: string | null;
  description: string;
  descriptionUr?: string | null;
  dueDate: string;
  assignedTo: string;
  classId: string;
  className: string;
  status: string;
  createdBy: string;
  createdAt: string;
  subject?: string | null;
}

export interface Lesson {
  id: string;
  title: string;
  titleUr?: string | null;
  classId: string;
  className: string;
  teacherId: string;
  teacherName: string;
  schedule: string;
  duration: number;
  status: string;
  students: string[];
  subject?: string | null;
  progress?: number | null;
}

export interface ClassItem {
  id: string;
  name: string;
  nameUr?: string | null;
  teacherId: string;
  teacherName: string;
  schedule: string;
  studentCount: number;
  subject?: string | null;
}

export interface ActivityItem {
  id: string;
  type: string;
  message: string;
  messageUr?: string | null;
  timestamp: string;
  actor: string;
  icon?: string | null;
}

export const classes: ClassItem[] = [
  { id: "cls-1", name: "Hifz Class A", nameUr: "حفظ کلاس الف", teacherId: "t-1", teacherName: "Maulana Abdul Rahman", schedule: "Mon-Fri 8:00 AM", studentCount: 12, subject: "Quran Hifz" },
  { id: "cls-2", name: "Hifz Class B", nameUr: "حفظ کلاس ب", teacherId: "t-2", teacherName: "Ustadh Ibrahim Ali", schedule: "Mon-Fri 9:00 AM", studentCount: 10, subject: "Quran Hifz" },
  { id: "cls-3", name: "Nazra Class", nameUr: "ناظرہ کلاس", teacherId: "t-3", teacherName: "Maulana Yusuf Hassan", schedule: "Mon-Sat 10:00 AM", studentCount: 15, subject: "Quran Nazra" },
  { id: "cls-4", name: "Islamic Studies Grade 1", nameUr: "اسلامی تعلیم پہلی جماعت", teacherId: "t-4", teacherName: "Sister Fatima Zahra", schedule: "Mon-Fri 11:00 AM", studentCount: 18, subject: "Islamic Studies" },
  { id: "cls-5", name: "Islamic Studies Grade 2", nameUr: "اسلامی تعلیم دوسری جماعت", teacherId: "t-5", teacherName: "Ustadha Maryam Siddiqui", schedule: "Mon-Fri 12:00 PM", studentCount: 16, subject: "Islamic Studies" },
  { id: "cls-6", name: "Arabic Language Beginner", nameUr: "عربی زبان ابتدائی", teacherId: "t-6", teacherName: "Sheikh Omar Farooq", schedule: "Tue-Thu 2:00 PM", studentCount: 14, subject: "Arabic" },
  { id: "cls-7", name: "Urdu Literature", nameUr: "اردو ادب", teacherId: "t-7", teacherName: "Maulana Bilal Ahmad", schedule: "Mon-Wed-Fri 3:00 PM", studentCount: 20, subject: "Urdu" },
];

export const teachers: Teacher[] = [
  { id: "t-1", name: "Maulana Abdul Rahman", nameUr: "مولانا عبدالرحمن", email: "abdulrahman@madrasa.edu", phone: "+92-300-1234567", subjects: ["Quran Hifz", "Tajweed"], classes: ["cls-1"], qualification: "Hafiz-e-Quran, Dars-e-Nizami", hireDate: "2018-03-15", status: "active", specialization: "Quran Memorization", experience: 12 },
  { id: "t-2", name: "Ustadh Ibrahim Ali", nameUr: "استاذ ابراہیم علی", email: "ibrahim@madrasa.edu", phone: "+92-321-9876543", subjects: ["Quran Hifz", "Tajweed", "Tafseer"], classes: ["cls-2"], qualification: "Hafiz-e-Quran, MA Islamic Studies", hireDate: "2019-07-01", status: "active", specialization: "Quran Recitation", experience: 8 },
  { id: "t-3", name: "Maulana Yusuf Hassan", nameUr: "مولانا یوسف حسن", email: "yusuf@madrasa.edu", phone: "+92-333-5551234", subjects: ["Quran Nazra", "Islamic Studies"], classes: ["cls-3"], qualification: "Hafiz-e-Quran, Dars-e-Nizami", hireDate: "2017-01-10", status: "active", specialization: "Quran Teaching", experience: 15 },
  { id: "t-4", name: "Sister Fatima Zahra", nameUr: "سسٹر فاطمہ زہرا", email: "fatima@madrasa.edu", phone: "+92-345-7778888", subjects: ["Islamic Studies", "Fiqh", "Aqeedah"], classes: ["cls-4"], qualification: "BA Islamic Studies, Aalima Course", hireDate: "2020-08-20", status: "active", specialization: "Islamic Jurisprudence", experience: 6 },
  { id: "t-5", name: "Ustadha Maryam Siddiqui", nameUr: "استاذہ مریم صدیقی", email: "maryam@madrasa.edu", phone: "+92-311-2223334", subjects: ["Islamic Studies", "Seerah", "Hadith"], classes: ["cls-5"], qualification: "MA Islamic Studies, Aalima", hireDate: "2021-02-15", status: "active", specialization: "Hadith Sciences", experience: 5 },
  { id: "t-6", name: "Sheikh Omar Farooq", nameUr: "شیخ عمر فاروق", email: "omar@madrasa.edu", phone: "+92-300-9990001", subjects: ["Arabic", "Quran Translation"], classes: ["cls-6"], qualification: "BA Arabic, MA Linguistics (Cairo University)", hireDate: "2016-05-01", status: "active", specialization: "Arabic Language & Literature", experience: 18 },
  { id: "t-7", name: "Maulana Bilal Ahmad", nameUr: "مولانا بلال احمد", email: "bilal@madrasa.edu", phone: "+92-322-4445556", subjects: ["Urdu", "Islamic History"], classes: ["cls-7"], qualification: "MA Urdu Literature, Dars-e-Nizami", hireDate: "2019-11-01", status: "inactive", specialization: "Urdu Literature", experience: 9 },
  { id: "t-8", name: "Ustadh Khalid Mahmood", nameUr: "استاذ خالد محمود", email: "khalid@madrasa.edu", phone: "+92-334-1112223", subjects: ["Mathematics", "Science"], classes: [], qualification: "MSc Mathematics", hireDate: "2022-01-10", status: "active", specialization: "Mathematics", experience: 4 },
];

export const students: Student[] = [
  { id: "s-1", name: "Ahmed Raza Khan", nameUr: "احمد رضا خان", email: "ahmed@student.edu", phone: "+92-300-1111111", classId: "cls-1", className: "Hifz Class A", enrollDate: "2022-04-01", guardianName: "Muhammad Raza Khan", guardianPhone: "+92-300-2222222", status: "active", grade: "A", attendance: 94.5, address: "House 12, Street 4, Model Town, Lahore", notes: "Excellent progress in memorization" },
  { id: "s-2", name: "Fatima Malik", nameUr: "فاطمہ ملک", email: "fatima@student.edu", phone: "+92-321-3333333", classId: "cls-3", className: "Nazra Class", enrollDate: "2023-01-15", guardianName: "Ali Malik", guardianPhone: "+92-321-4444444", status: "active", grade: "A+", attendance: 98.2, address: "Flat 5, Gulberg III, Lahore", notes: null },
  { id: "s-3", name: "Hassan Abdullah", nameUr: "حسن عبداللہ", email: "hassan@student.edu", phone: "+92-333-5555555", classId: "cls-1", className: "Hifz Class A", enrollDate: "2021-09-01", guardianName: "Abdullah Sheikh", guardianPhone: "+92-333-6666666", status: "active", grade: "B+", attendance: 87.3, address: "Plot 88, DHA Phase 5, Karachi", notes: "Needs extra attention on last 5 Juz" },
  { id: "s-4", name: "Aisha Siddiqui", nameUr: "عائشہ صدیقی", email: "aisha@student.edu", phone: "+92-311-7777777", classId: "cls-4", className: "Islamic Studies Grade 1", enrollDate: "2023-03-10", guardianName: "Tariq Siddiqui", guardianPhone: "+92-311-8888888", status: "active", grade: "A", attendance: 91.0, address: "Sector F-8, Islamabad", notes: null },
  { id: "s-5", name: "Omar Farhan", nameUr: "عمر فرحان", email: "omar@student.edu", phone: "+92-345-9999999", classId: "cls-2", className: "Hifz Class B", enrollDate: "2022-07-20", guardianName: "Farhan Ahmed", guardianPhone: "+92-345-0000001", status: "active", grade: "B", attendance: 82.6, address: "House 7, Johar Town, Lahore", notes: "Attending extra sessions on Saturdays" },
  { id: "s-6", name: "Zainab Hussain", nameUr: "زینب حسین", email: "zainab@student.edu", phone: "+92-300-0000002", classId: "cls-5", className: "Islamic Studies Grade 2", enrollDate: "2022-09-01", guardianName: "Hussain Mir", guardianPhone: "+92-300-0000003", status: "active", grade: "A+", attendance: 96.8, address: "Block 14, North Nazimabad, Karachi", notes: "Top performer in class" },
  { id: "s-7", name: "Yusuf Tariq", nameUr: "یوسف طارق", email: "yusuf@student.edu", phone: "+92-321-0000004", classId: "cls-6", className: "Arabic Language Beginner", enrollDate: "2023-06-01", guardianName: "Tariq Mehmood", guardianPhone: "+92-321-0000005", status: "active", grade: "B+", attendance: 89.1, address: "Street 9, Askari XI, Lahore", notes: null },
  { id: "s-8", name: "Maryam Khalid", nameUr: "مریم خالد", email: "maryam@student.edu", phone: "+92-333-0000006", classId: "cls-3", className: "Nazra Class", enrollDate: "2022-03-15", guardianName: "Khalid Baig", guardianPhone: "+92-333-0000007", status: "active", grade: "A", attendance: 93.4, address: "House 55, Wapda Town, Lahore", notes: null },
  { id: "s-9", name: "Ibrahim Shah", nameUr: "ابراہیم شاہ", email: "ibrahim@student.edu", phone: "+92-322-0000008", classId: "cls-7", className: "Urdu Literature", enrollDate: "2023-08-01", guardianName: "Waqar Shah", guardianPhone: "+92-322-0000009", status: "active", grade: "C+", attendance: 75.2, address: "Colony 3, Rawalpindi", notes: "Struggling with written assignments" },
  { id: "s-10", name: "Khadija Iqbal", nameUr: "خدیجہ اقبال", email: "khadija@student.edu", phone: "+92-300-0000010", classId: "cls-4", className: "Islamic Studies Grade 1", enrollDate: "2022-11-01", guardianName: "Iqbal Ahmed", guardianPhone: "+92-300-0000011", status: "inactive", grade: "B", attendance: 68.5, address: "Township, Lahore", notes: "On medical leave" },
  { id: "s-11", name: "Abdullah Noor", nameUr: "عبداللہ نور", email: "abdullah@student.edu", phone: "+92-311-0000012", classId: "cls-2", className: "Hifz Class B", enrollDate: "2021-04-01", guardianName: "Noor Muhammad", guardianPhone: "+92-311-0000013", status: "graduated", grade: "A+", attendance: 99.1, address: "Gulshan-e-Iqbal, Karachi", notes: "Completed Hifz in 3.5 years" },
  { id: "s-12", name: "Safiyya Rashid", nameUr: "صفیہ راشد", email: "safiyya@student.edu", phone: "+92-345-0000014", classId: "cls-5", className: "Islamic Studies Grade 2", enrollDate: "2023-02-10", guardianName: "Rashid Qureshi", guardianPhone: "+92-345-0000015", status: "active", grade: "A", attendance: 92.7, address: "Phase 7, DHA, Karachi", notes: null },
  { id: "s-13", name: "Hamza Usman", nameUr: "حمزہ عثمان", email: "hamza@student.edu", phone: "+92-300-0000016", classId: "cls-1", className: "Hifz Class A", enrollDate: "2023-09-01", guardianName: "Usman Ghani", guardianPhone: "+92-300-0000017", status: "active", grade: "B", attendance: 85.0, address: "Cantt, Rawalpindi", notes: null },
  { id: "s-14", name: "Ruqayyah Aziz", nameUr: "رقیہ عزیز", email: "ruqayyah@student.edu", phone: "+92-321-0000018", classId: "cls-6", className: "Arabic Language Beginner", enrollDate: "2024-01-10", guardianName: "Abdul Aziz", guardianPhone: "+92-321-0000019", status: "active", grade: null, attendance: 88.3, address: "Sector I-8, Islamabad", notes: "New enrollment" },
  { id: "s-15", name: "Bilal Anwar", nameUr: "بلال انور", email: "bilal@student.edu", phone: "+92-333-0000020", classId: "cls-7", className: "Urdu Literature", enrollDate: "2022-06-01", guardianName: "Anwar Baig", guardianPhone: "+92-333-0000021", status: "active", grade: "A", attendance: 90.5, address: "Block C, Gulberg, Lahore", notes: null },
];

export const assignments: Assignment[] = [
  { id: "a-1", title: "Surah Al-Baqarah Revision", titleUr: "سورہ البقرہ مراجعت", description: "Revise first 50 ayahs of Surah Al-Baqarah with proper tajweed", descriptionUr: "سورہ البقرہ کی پہلی 50 آیات تجوید کے ساتھ یاد کریں", dueDate: "2024-07-15", assignedTo: "Hifz Class A", classId: "cls-1", className: "Hifz Class A", status: "pending", createdBy: "Maulana Abdul Rahman", createdAt: "2024-07-01", subject: "Quran Hifz" },
  { id: "a-2", title: "Arabic Alphabet Practice", titleUr: "عربی حروف مشق", description: "Write Arabic alphabet 5 times each and bring to next class", descriptionUr: "عربی حروف ہجا پانچ بار لکھیں", dueDate: "2024-07-10", assignedTo: "Arabic Language Beginner", classId: "cls-6", className: "Arabic Language Beginner", status: "completed", createdBy: "Sheikh Omar Farooq", createdAt: "2024-07-05", subject: "Arabic" },
  { id: "a-3", title: "Five Pillars Essay", titleUr: "ارکان اسلام مضمون", description: "Write a 500-word essay on the Five Pillars of Islam", descriptionUr: "اسلام کے پانچ ارکان پر 500 الفاظ کا مضمون لکھیں", dueDate: "2024-07-08", assignedTo: "Islamic Studies Grade 1", classId: "cls-4", className: "Islamic Studies Grade 1", status: "overdue", createdBy: "Sister Fatima Zahra", createdAt: "2024-06-28", subject: "Islamic Studies" },
  { id: "a-4", title: "Hadith Memorization - 40 Hadith", titleUr: "حدیث حفظ - 40 احادیث", description: "Memorize the next 10 hadith from Arbaeen An-Nawawi", descriptionUr: "اربعین نووی سے اگلی 10 احادیث حفظ کریں", dueDate: "2024-07-20", assignedTo: "Islamic Studies Grade 2", classId: "cls-5", className: "Islamic Studies Grade 2", status: "pending", createdBy: "Ustadha Maryam Siddiqui", createdAt: "2024-07-08", subject: "Hadith" },
  { id: "a-5", title: "Urdu Poem Recitation", titleUr: "اردو نظم", description: "Learn and recite Allama Iqbal's Shaheen poem in class", descriptionUr: "علامہ اقبال کی نظم شاہین یاد کریں اور کلاس میں پڑھیں", dueDate: "2024-07-12", assignedTo: "Urdu Literature", classId: "cls-7", className: "Urdu Literature", status: "completed", createdBy: "Maulana Bilal Ahmad", createdAt: "2024-07-01", subject: "Urdu" },
  { id: "a-6", title: "Juz Amma Revision", titleUr: "جزء عم مراجعت", description: "Complete revision of entire Juz Amma for the week", descriptionUr: "پوری جزء عم کا ہفتہ وار مراجعہ", dueDate: "2024-07-14", assignedTo: "Hifz Class B", classId: "cls-2", className: "Hifz Class B", status: "pending", createdBy: "Ustadh Ibrahim Ali", createdAt: "2024-07-07", subject: "Quran Hifz" },
  { id: "a-7", title: "Wudu & Salah Practical", titleUr: "وضو اور نماز عملی", description: "Demonstrate correct method of Wudu and all daily prayers", descriptionUr: "وضو اور پانچ نمازوں کا صحیح طریقہ دکھائیں", dueDate: "2024-07-18", assignedTo: "Islamic Studies Grade 1", classId: "cls-4", className: "Islamic Studies Grade 1", status: "pending", createdBy: "Sister Fatima Zahra", createdAt: "2024-07-10", subject: "Fiqh" },
  { id: "a-8", title: "Quran Translation Exercise", titleUr: "ترجمہ قرآن مشق", description: "Translate Surah Al-Fatiha word by word into Urdu", descriptionUr: "سورہ الفاتحہ کا لفظ بہ لفظ اردو ترجمہ", dueDate: "2024-07-16", assignedTo: "Arabic Language Beginner", classId: "cls-6", className: "Arabic Language Beginner", status: "pending", createdBy: "Sheikh Omar Farooq", createdAt: "2024-07-09", subject: "Arabic" },
  { id: "a-9", title: "Seerah Project — Early Life of Prophet", titleUr: "سیرت پروجیکٹ", description: "Create a timeline of key events in Prophet Muhammad's early life", descriptionUr: "نبی کریمﷺ کی ابتدائی زندگی کے اہم واقعات کا خاکہ بنائیں", dueDate: "2024-07-25", assignedTo: "Islamic Studies Grade 2", classId: "cls-5", className: "Islamic Studies Grade 2", status: "pending", createdBy: "Ustadha Maryam Siddiqui", createdAt: "2024-07-10", subject: "Seerah" },
  { id: "a-10", title: "Nazra Test Preparation", titleUr: "ناظرہ امتحان تیاری", description: "Prepare the entire Surah Al-Imran for the monthly test", descriptionUr: "ماہانہ امتحان کے لیے پوری سورہ آل عمران تیار کریں", dueDate: "2024-07-22", assignedTo: "Nazra Class", classId: "cls-3", className: "Nazra Class", status: "pending", createdBy: "Maulana Yusuf Hassan", createdAt: "2024-07-08", subject: "Quran Nazra" },
  { id: "a-11", title: "Arabic Sentence Construction", titleUr: "عربی جملہ سازی", description: "Construct 20 simple Arabic sentences using today's vocabulary", descriptionUr: "آج کے الفاظ استعمال کرتے ہوئے 20 سادہ عربی جملے بنائیں", dueDate: "2024-07-13", assignedTo: "Arabic Language Beginner", classId: "cls-6", className: "Arabic Language Beginner", status: "completed", createdBy: "Sheikh Omar Farooq", createdAt: "2024-07-06", subject: "Arabic" },
  { id: "a-12", title: "Dua Memorization Set 2", titleUr: "دعائیں حفظ سیٹ 2", description: "Memorize 10 daily duas with meanings", descriptionUr: "معنی کے ساتھ 10 روزانہ کی دعائیں حفظ کریں", dueDate: "2024-07-17", assignedTo: "Islamic Studies Grade 1", classId: "cls-4", className: "Islamic Studies Grade 1", status: "pending", createdBy: "Sister Fatima Zahra", createdAt: "2024-07-10", subject: "Islamic Studies" },
  { id: "a-13", title: "Tajweed Rules Quiz", titleUr: "تجوید اصول کوئز", description: "Study Ikhfa, Idgham, and Iqlab rules for the quiz", descriptionUr: "اخفاء، ادغام اور اقلاب کے اصول کوئز کے لیے پڑھیں", dueDate: "2024-07-11", assignedTo: "Hifz Class A", classId: "cls-1", className: "Hifz Class A", status: "completed", createdBy: "Maulana Abdul Rahman", createdAt: "2024-07-04", subject: "Tajweed" },
  { id: "a-14", title: "Urdu Essay — My Madrasa", titleUr: "اردو مضمون — میرا مدرسہ", description: "Write a 300-word Urdu essay about your madrasa experience", descriptionUr: "اپنے مدرسے کے تجربے پر 300 الفاظ کا اردو مضمون لکھیں", dueDate: "2024-07-19", assignedTo: "Urdu Literature", classId: "cls-7", className: "Urdu Literature", status: "pending", createdBy: "Maulana Bilal Ahmad", createdAt: "2024-07-11", subject: "Urdu" },
  { id: "a-15", title: "Hifz Monthly Revision", titleUr: "حفظ ماہانہ مراجعت", description: "Full revision of all memorized surahs assigned this month", descriptionUr: "اس مہینے یاد کی گئی تمام سورتوں کا مکمل مراجعہ", dueDate: "2024-07-31", assignedTo: "Hifz Class B", classId: "cls-2", className: "Hifz Class B", status: "pending", createdBy: "Ustadh Ibrahim Ali", createdAt: "2024-07-12", subject: "Quran Hifz" },
  { id: "a-16", title: "Aqeedah Short Test", titleUr: "عقیدہ مختصر امتحان", description: "Short written test on articles of faith (Iman)", descriptionUr: "ایمان کے ارکان پر مختصر تحریری امتحان", dueDate: "2024-07-09", assignedTo: "Islamic Studies Grade 2", classId: "cls-5", className: "Islamic Studies Grade 2", status: "completed", createdBy: "Ustadha Maryam Siddiqui", createdAt: "2024-07-02", subject: "Aqeedah" },
  { id: "a-17", title: "Grammar Exercise Book Page 12-18", titleUr: "گرامر مشق صفحہ 12-18", description: "Complete grammar exercises from the course workbook", descriptionUr: "کورس ورک بک سے گرامر مشقیں مکمل کریں", dueDate: "2024-07-23", assignedTo: "Arabic Language Beginner", classId: "cls-6", className: "Arabic Language Beginner", status: "pending", createdBy: "Sheikh Omar Farooq", createdAt: "2024-07-13", subject: "Arabic" },
  { id: "a-18", title: "Islamic History Timeline Project", titleUr: "اسلامی تاریخ ٹائم لائن", description: "Create a poster with the timeline of Islamic Golden Age", descriptionUr: "اسلامی سنہری دور کی ٹائم لائن کا پوسٹر بنائیں", dueDate: "2024-07-28", assignedTo: "Urdu Literature", classId: "cls-7", className: "Urdu Literature", status: "pending", createdBy: "Maulana Bilal Ahmad", createdAt: "2024-07-14", subject: "Islamic History" },
  { id: "a-19", title: "Surah Yaseen Recitation", titleUr: "سورہ یٰسین تلاوت", description: "Recite Surah Yaseen aloud for evaluation", descriptionUr: "سورہ یٰسین بلند آواز سے پڑھیں اور جانچ کروائیں", dueDate: "2024-07-21", assignedTo: "Nazra Class", classId: "cls-3", className: "Nazra Class", status: "pending", createdBy: "Maulana Yusuf Hassan", createdAt: "2024-07-13", subject: "Quran Nazra" },
  { id: "a-20", title: "Manners & Ethics Worksheet", titleUr: "اخلاقیات ورک شیٹ", description: "Complete worksheet on Islamic manners and daily etiquette", descriptionUr: "اسلامی آداب اور روزمرہ تمیز پر ورک شیٹ مکمل کریں", dueDate: "2024-07-15", assignedTo: "Islamic Studies Grade 1", classId: "cls-4", className: "Islamic Studies Grade 1", status: "overdue", createdBy: "Sister Fatima Zahra", createdAt: "2024-07-05", subject: "Islamic Studies" },
];

export const lessons: Lesson[] = [
  { id: "l-1", title: "Tajweed Rules — Ghunnah & Madd", titleUr: "تجوید — غنہ اور مد", classId: "cls-1", className: "Hifz Class A", teacherId: "t-1", teacherName: "Maulana Abdul Rahman", schedule: "Monday 8:00 AM", duration: 60, status: "ongoing", students: ["s-1", "s-3", "s-13"], subject: "Tajweed", progress: 65 },
  { id: "l-2", title: "Juz 28 Memorization Session", titleUr: "جزء 28 حفظ", classId: "cls-2", className: "Hifz Class B", teacherId: "t-2", teacherName: "Ustadh Ibrahim Ali", schedule: "Monday 9:00 AM", duration: 90, status: "scheduled", students: ["s-5", "s-11"], subject: "Quran Hifz", progress: 40 },
  { id: "l-3", title: "Surah Al-Imran Reading Practice", titleUr: "سورہ آل عمران تلاوت", classId: "cls-3", className: "Nazra Class", teacherId: "t-3", teacherName: "Maulana Yusuf Hassan", schedule: "Monday 10:00 AM", duration: 60, status: "ongoing", students: ["s-2", "s-8"], subject: "Quran Nazra", progress: 80 },
  { id: "l-4", title: "Five Pillars of Islam — Introduction", titleUr: "ارکان اسلام — تعارف", classId: "cls-4", className: "Islamic Studies Grade 1", teacherId: "t-4", teacherName: "Sister Fatima Zahra", schedule: "Monday 11:00 AM", duration: 45, status: "completed", students: ["s-4", "s-10", "s-12"], subject: "Islamic Studies", progress: 100 },
  { id: "l-5", title: "Hadith Sciences — Introduction to Isnad", titleUr: "علم حدیث — سند کا تعارف", classId: "cls-5", className: "Islamic Studies Grade 2", teacherId: "t-5", teacherName: "Ustadha Maryam Siddiqui", schedule: "Monday 12:00 PM", duration: 60, status: "ongoing", students: ["s-6", "s-12"], subject: "Hadith", progress: 55 },
  { id: "l-6", title: "Arabic Alphabet — Letters & Sounds", titleUr: "عربی حروف — حروف اور آوازیں", classId: "cls-6", className: "Arabic Language Beginner", teacherId: "t-6", teacherName: "Sheikh Omar Farooq", schedule: "Tuesday 2:00 PM", duration: 75, status: "scheduled", students: ["s-7", "s-14"], subject: "Arabic", progress: 20 },
  { id: "l-7", title: "Allama Iqbal's Poetry — Shikwa", titleUr: "علامہ اقبال کی شاعری — شکوہ", classId: "cls-7", className: "Urdu Literature", teacherId: "t-7", teacherName: "Maulana Bilal Ahmad", schedule: "Monday 3:00 PM", duration: 60, status: "completed", students: ["s-9", "s-15"], subject: "Urdu", progress: 100 },
  { id: "l-8", title: "Wudu & Ghusl — Fiqh Lesson", titleUr: "وضو اور غسل — فقہ", classId: "cls-4", className: "Islamic Studies Grade 1", teacherId: "t-4", teacherName: "Sister Fatima Zahra", schedule: "Wednesday 11:00 AM", duration: 50, status: "scheduled", students: ["s-4", "s-10"], subject: "Fiqh", progress: 0 },
  { id: "l-9", title: "Surah Yaseen — Tafseer Session", titleUr: "سورہ یٰسین — تفسیر", classId: "cls-3", className: "Nazra Class", teacherId: "t-3", teacherName: "Maulana Yusuf Hassan", schedule: "Wednesday 10:00 AM", duration: 90, status: "ongoing", students: ["s-2", "s-8"], subject: "Tafseer", progress: 70 },
  { id: "l-10", title: "Prophet's Life — Makkan Period", titleUr: "نبی کریمﷺ کی زندگی — مکی دور", classId: "cls-5", className: "Islamic Studies Grade 2", teacherId: "t-5", teacherName: "Ustadha Maryam Siddiqui", schedule: "Wednesday 12:00 PM", duration: 60, status: "completed", students: ["s-6", "s-12"], subject: "Seerah", progress: 100 },
];

export const recentActivities: ActivityItem[] = [
  { id: "act-1", type: "student_added", message: "New student Ruqayyah Aziz enrolled in Arabic Language Beginner", messageUr: "نئی طالبہ رقیہ عزیز نے عربی زبان ابتدائی میں داخلہ لیا", timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), actor: "Admin", icon: "UserPlus" },
  { id: "act-2", type: "assignment_completed", message: "Arabic Alphabet Practice marked as completed by Sheikh Omar Farooq", messageUr: "عربی حروف مشق شیخ عمر فاروق نے مکمل قرار دی", timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), actor: "Sheikh Omar Farooq", icon: "CheckCircle" },
  { id: "act-3", type: "lesson_started", message: "Tajweed Rules lesson started in Hifz Class A", messageUr: "حفظ کلاس الف میں تجوید اصول کا سبق شروع ہوا", timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), actor: "Maulana Abdul Rahman", icon: "BookOpen" },
  { id: "act-4", type: "assignment_overdue", message: "Five Pillars Essay is overdue in Islamic Studies Grade 1", messageUr: "اسلامی تعلیم پہلی جماعت میں ارکان اسلام مضمون کی مدت گزر گئی", timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), actor: "System", icon: "AlertCircle" },
  { id: "act-5", type: "teacher_updated", message: "Ustadha Maryam Siddiqui's schedule updated", messageUr: "استاذہ مریم صدیقی کا نظام الاوقات اپ ڈیٹ کیا گیا", timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), actor: "Admin", icon: "Calendar" },
  { id: "act-6", type: "student_graduated", message: "Abdullah Noor has successfully completed Hifz program", messageUr: "عبداللہ نور نے حفظ پروگرام کامیابی سے مکمل کیا", timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), actor: "Admin", icon: "Award" },
  { id: "act-7", type: "lesson_completed", message: "Allama Iqbal Poetry lesson completed in Urdu Literature", messageUr: "اردو ادب میں علامہ اقبال شاعری کا سبق مکمل ہوا", timestamp: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(), actor: "Maulana Bilal Ahmad", icon: "CheckCircle" },
  { id: "act-8", type: "assignment_created", message: "New assignment created: Hifz Monthly Revision for Hifz Class B", messageUr: "نئی تفویض بنائی گئی: حفظ کلاس ب کے لیے ماہانہ مراجعت", timestamp: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(), actor: "Ustadh Ibrahim Ali", icon: "FilePlus" },
];
