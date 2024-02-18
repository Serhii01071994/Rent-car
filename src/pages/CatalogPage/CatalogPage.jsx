import { Welcome } from "components/Welcome/Welcome"


export const CatalogPage = () => {
// const [allCars, setAllCars] = useState([]);
// const [cars, setCars] = useState([]);
// const [loading, setLoading] = useState(false);
// const [brands, setBrands] = useState([]);
// const [selectCar, setSelectCar] = useState(null);
// const [selectBrand, setSelectBrand] = useState('');
// const [favorites, setFavorites] = useState([]);
// const [page, setPage] = useState(1);
// const [perPage] = useState(12);
// const dispatch = useDispatch();

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           setLoading(true);
//           const carsData = await getAllCars();
//           setAllCars(carsData);
//           setCars(carsData.slice(0, perPage));
//           const uniqueBrands = [...new Set(carsData.map(car => car.make))];
//           setBrands(uniqueBrands);
//         } catch (error) {
//           console.error('Error fetching cars:', error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchData();
//     }, [perPage]);
    
    return (
        <div>
            <Welcome/>
            <div>Catalog</div>
        </div>
    )
}