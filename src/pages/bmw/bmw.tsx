import { car } from '../../data/cars';

export function BMW () {
    const bmwModels = [
        {
            model: "M5",
            year: 2021,
            description: "High-performance sports sedan with a V8 engine",
            image: car.image
        },
        {
            model: "X5",
            year: 2023,
            description: "Luxury midsize SUV with advanced technology",
            image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400"
        },
        {
            model: "i4",
            year: 2024,
            description: "Electric Gran Coupe with impressive range",
            image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400"
        },
        {
            model: "3 Series",
            year: 2023,
            description: "Iconic sports sedan with perfect balance",
            image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400"
        }
    ];

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8 text-blue-600">BMW Models</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bmwModels.map((model, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src={model.image} 
                            alt={`BMW ${model.model}`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">BMW {model.model}</h2>
                            <p className="text-gray-600 mb-2">Year: {model.year}</p>
                            <p className="text-gray-700">{model.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">About BMW</h2>
                <p className="text-gray-700 mb-4">
                    BMW (Bayerische Motoren Werke AG) is a German multinational manufacturer of luxury vehicles and motorcycles. 
                    Founded in 1916, BMW is known for producing high-performance vehicles that combine luxury with driving dynamics.
                </p>
                <p className="text-gray-700">
                    The brand's slogan "The Ultimate Driving Machine" reflects its commitment to creating vehicles that offer 
                    an exceptional driving experience, advanced technology, and timeless design.
                </p>
            </div>
        </div>
    );
}