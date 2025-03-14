import { Button } from "../ui/button";

type Job = {
  id: string;
  title: string;
  company: string;
  city: string;
  salary: number;
};

type JobItemsProps = {
  job: Job;
};

export default function JobItem ({ job } : JobItemsProps) {
  return (
    <article className="flex w-full items-center justify-between border border-t-4 border-black px-6 py-4 transition-colors hover:border-blue-400">
      <h3 className="font-display text-lg font-medium text-gray-700">{job.title}</h3>
      <h4 className="font-light text-gray-500">{job.company}</h4>
      <h4 className="font-light text-gray-500">{job.city}</h4>
      <h4 className="font-light text-gray-500">R$ {job.salary}</h4>
      <Button className="cursor-pointer" variant={'outline'}>Mais</Button>
    </article>
  );
}