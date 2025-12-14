export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
      <Icon className="w-8 h-8 text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
