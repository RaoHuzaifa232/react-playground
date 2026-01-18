export function Ford() {
    const fordModels = [
        {
            model: "Mustang",
            year: 2021,
            description: "Iconic American muscle car with powerful performance",
            image: "https://images.unsplash.com/photo-1584345604476-8ec5f1f69b06?w=400"
        },
        {
            model: "F-150",
            year: 2024,
            description: "America's best-selling truck with legendary capability",
            image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400"
        },
        {
            model: "Explorer",
            year: 2023,
            description: "Spacious SUV perfect for family adventures",
            image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400"
        },
        {
            model: "Bronco",
            year: 2024,
            description: "Legendary off-road SUV returns with modern capabilities",
            image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=400"
        }
    ];

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8 text-blue-800">Ford Models</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fordModels.map((model, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src={model.image} 
                            alt={`Ford ${model.model}`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">Ford {model.model}</h2>
                            <p className="text-gray-600 mb-2">Year: {model.year}</p>
                            <p className="text-gray-700">{model.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">About Ford</h2>
                <p className="text-gray-700 mb-4">
                    Ford Motor Company, founded by Henry Ford in 1903, is an American multinational automaker 
                    that revolutionized the automotive industry with assembly line production. Ford is known 
                    for building tough, reliable vehicles that stand the test of time.
                </p>
                <p className="text-gray-700">
                    With iconic models like the F-Series trucks and Mustang, Ford continues to be a symbol of 
                    American innovation and craftsmanship, committed to "Built Ford Tough" quality.
                </p>
            </div>
        </div>
    );
}
