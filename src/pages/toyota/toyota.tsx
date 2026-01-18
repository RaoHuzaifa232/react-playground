export function Toyota() {
    const toyotaModels = [
        {
            model: "Corolla",
            year: 2023,
            description: "World's best-selling sedan with legendary reliability",
            image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=400"
        },
        {
            model: "Camry",
            year: 2024,
            description: "Premium midsize sedan with hybrid technology",
            image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400"
        },
        {
            model: "RAV4",
            year: 2024,
            description: "Popular compact SUV with exceptional versatility",
            image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=400"
        },
        {
            model: "Prius",
            year: 2023,
            description: "Pioneering hybrid with outstanding fuel efficiency",
            image: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=400"
        }
    ];

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8 text-red-600">Toyota Models</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {toyotaModels.map((model, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src={model.image} 
                            alt={`Toyota ${model.model}`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">Toyota {model.model}</h2>
                            <p className="text-gray-600 mb-2">Year: {model.year}</p>
                            <p className="text-gray-700">{model.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-red-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">About Toyota</h2>
                <p className="text-gray-700 mb-4">
                    Toyota Motor Corporation is a Japanese multinational automotive manufacturer founded in 1937. 
                    Known for pioneering hybrid technology and manufacturing excellence, Toyota has become the world's 
                    largest automaker by production volume.
                </p>
                <p className="text-gray-700">
                    With a commitment to quality, durability, and reliability, Toyota's philosophy of "Kaizen" 
                    (continuous improvement) has made it a trusted name in automotive manufacturing worldwide.
                </p>
            </div>
        </div>
    );
}
