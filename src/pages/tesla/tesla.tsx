export function Tesla() {
    const teslaModels = [
        {
            model: "Model 3",
            year: 2024,
            description: "Best-selling electric sedan with exceptional range",
            image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400"
        },
        {
            model: "Model S",
            year: 2024,
            description: "Luxury electric sedan with cutting-edge technology",
            image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400"
        },
        {
            model: "Model X",
            year: 2024,
            description: "Premium electric SUV with falcon-wing doors",
            image: "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=400"
        },
        {
            model: "Model Y",
            year: 2024,
            description: "Versatile electric crossover for modern families",
            image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=400"
        }
    ];

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8 text-purple-600">Tesla Models</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teslaModels.map((model, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src={model.image} 
                            alt={`Tesla ${model.model}`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">Tesla {model.model}</h2>
                            <p className="text-gray-600 mb-2">Year: {model.year}</p>
                            <p className="text-gray-700">{model.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-purple-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">About Tesla</h2>
                <p className="text-gray-700 mb-4">
                    Tesla, Inc., founded in 2003, is an American electric vehicle and clean energy company. 
                    Led by CEO Elon Musk, Tesla has revolutionized the automotive industry by proving that 
                    electric vehicles can be both high-performance and sustainable.
                </p>
                <p className="text-gray-700">
                    With a mission to accelerate the world's transition to sustainable energy, Tesla continues 
                    to push the boundaries of technology with innovations in autonomous driving, battery technology, 
                    and energy storage solutions.
                </p>
            </div>
        </div>
    );
}
