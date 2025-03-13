export default function handler(req, res) {
  res
    .status(200)
    .json({ companyId: process.env.NEXT_PUBLIC_CHAT_COMPONENT_COMPANY });
}
