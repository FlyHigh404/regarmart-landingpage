import prisma from "../config/prisma.js";

const findAll = async (lang = 'id') => {
  const faqsFromDb = await prisma.faq.findMany({
    select: {
      id: true,
      question_id: true,
      question_eng: true,
      answer_id: true,
      answer_eng: true,
    },
    orderBy: {
      id: 'asc',
    },
  });

  const faqs = faqsFromDb.map(faq => {
    return {
      id: faq.id,
      question: lang === 'eng' ? faq.question_eng : faq.question_id,
      answer: lang === 'eng' ? faq.answer_eng : faq.answer_id,
    };
  });

  return faqs;
};

export default { findAll };