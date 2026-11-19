function StatCard({ title, value, icon, color }) {

  return (

    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-primary mt-2">
            {value}
          </h2>

        </div>

        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>

      </div>

    </div>

  );

}

export default StatCard;