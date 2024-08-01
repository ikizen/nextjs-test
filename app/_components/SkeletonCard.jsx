const SkeletonCard = () => {
  return (
    <div className="animate-pulse group rounded-lg px-5 py-4">
      <div className="h-6 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded"></div>
      <div className="h-10 w-24 bg-blue-300 rounded mt-4 animate-pulse"></div>
    </div>
  );
};

export default SkeletonCard;
