import JobItem from "@/components/cards/jobItem";

const job = {
  id: "1",
  title: "Designer",
  company: "Google Brasil",
  city: "São Paulo",
  salary: 8000,
}

export default function Vagas() {
  return (
    <main className="py-10">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-8">
        <JobItem job={job}/>
        <JobItem job={job}/>
        <JobItem job={job}/>
        <JobItem job={job}/>
      </div>
    </main>
  );
}
