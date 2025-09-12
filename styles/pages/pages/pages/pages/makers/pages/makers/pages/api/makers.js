import makers from "@/data/makers.json";

export default function handler(req, res) {
  const { id } = req.query;
  if (id) {
    const m = makers.find(x => x.id === id);
    if (!m) return res.status(404).json({ error: "Maker not found" });
    return res.status(200).json(m);
  }
  res.status(200).json(makers);
}
