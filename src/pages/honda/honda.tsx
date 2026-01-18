export function Honda() {
    const hondaModels = [
        {
            model: "Civic",
            year: 2022,
            description: "Sporty compact sedan with exceptional handling",
            image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400"
        },
        {
            model: "Accord",
            year: 2024,
            description: "Premium midsize sedan with advanced technology",
            image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=400"
        },
        {
            model: "CR-V",
            year: 2023,
            description: "Versatile compact SUV with spacious interior",
            image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400"
        },
        {
            model: "Pilot",
            year: 2024,
            description: "Family-friendly SUV with three-row seating",
            image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400"
        }
    ];

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Honda Models</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hondaModels.map((model, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src={model.image} 
                            alt={`Honda ${model.model}`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">Honda {model.model}</h2>
                            <p className="text-gray-600 mb-2">Year: {model.year}</p>
                            <p className="text-gray-700">{model.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">About Honda</h2>
                <p className="text-gray-700 mb-4">
                    Honda Motor Co., Ltd. is a Japanese public multinational conglomerate known for manufacturing 
                    automobiles, motorcycles, and power equipment. Founded in 1948, Honda has built a reputation 
                    for engineering excellence and innovation.
                </p>
                <p className="text-gray-700">
                    Honda's "Power of Dreams" philosophy drives their commitment to creating products that bring 
                    joy and expand possibilities, making them one of the world's leading automotive manufacturers.
                </p>
            </div>
        </div>
    );
}
