import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// Pages
import Home from './pages/MainHome';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Financial Pages
import FinancialHome from './components/Financial/Home';
import SimpleInterestCalculator from './components/Financial/SimpleInterestCalculator';
import CompoundInterestCalculator from './components/Financial/CompoundInterestCalculator';
import CurrencyCalculator from './components/Financial/CurrencyCalculator';
import SalaryCalculator from './components/Financial/SalaryCalculator';
import RetirementCalculator from './components/Financial/RetirementCalculator';
import SalesTaxCalculator from './components/Financial/SalesTaxCalculator';
import InvestmentCalculator from './components/Financial/InvestmentCalculator';

// Health Pages
import HealthHome from './components/Health/Home';
import BMICalculator from './components/Health/BMICalculator';
import BMRCalculator from './components/Health/BMRCalculator';
import CalorieCalculator from './components/Health/CalorieCalculator';
import BodyFatCalculator from './components/Health/BodyFatCalculator';
import IdealWeightCalculator from './components/Health/IdealWeightCalculator';

// Conversion Pages
import ConversionHome from './components/Conversion/Home';
import AgeCalculator from './components/Conversion/AgeCalculator';
import BillTipCalculator from './components/Conversion/BillTipCalculator';
import DateCalculator from './components/Conversion/DateCalculator';
import GPACalculator from './components/Conversion/GPACalculator';
import HeightConverter from './components/Conversion/HeightConverter';
import HourToMinuteSeconds from './components/Conversion/HourToMinuteSeconds';
import LengthConverter from './components/Conversion/LengthConverter';
import PasswordGenerator from './components/Conversion/PasswordGenerator';

// Geometry Pages
import GeometryHome from './components/Geometry/Home';
import Distance2DCalculator from './components/Geometry/Distance2DCalculator';
import Distance3DCalculator from './components/Geometry/Distance3DCalculator';
import EquilateralTriangleCalculator from './components/Geometry/EquilateralTriangleCalculator';
import IsoscelesTriangleCalculator from './components/Geometry/IsoscelesTriangleCalculator';
import RightAngledTriangleCalculator from './components/Geometry/RightAngledTriangleCalculator';
import CubeCalculator from './components/Geometry/CubeCalculator';
import ConeCalculator from './components/Geometry/ConeCalculator';
import CircleCalculator from './components/Geometry/CircleCalculator';
import CylinderCalculator from './components/Geometry/CylinderCalculator';
import RectangleCalculator from './components/Geometry/RectangleCalculator';
import SquareCalculator from './components/Geometry/SquareCalculator';
import SphereCalculator from './components/Geometry/SphereCalculator';

// Algebra Pages
import AlgebraHome from './components/Algebra/Home';
import ComplexNumberCalculator from './components/Algebra/ComplexNumberCalculator';
import BooleanAlgebraSimplifier from './components/Algebra/BooleanAlgebraSimplifier';
import PartialFractionDecomposer from './components/Algebra/PartialFractionDecomposer';
import InequalityCalculator from './components/Algebra/InequalityCalculator';
import FlowRateCalculator from './components/Algebra/FlowRateCalculator';
import ImpulseCalculator from './components/Algebra/ImpulseCalculator';
import FactorizationCalculator from './components/Algebra/FactorizationCalculator';
import PercentageCalculator from './components/Algebra/PercentageCalculator';
import ExponentialFormulasCalculator from './components/Algebra/ExponentialFormulasCalculator';
import CubeOfNumberCalculator from './components/Algebra/CubeOfNumberCalculator';
import CubeRootCalculator from './components/Algebra/CubeRootCalculator';

// Arithmetic Pages
import ArithmeticHome from './components/Arithmetic/Home';
import AdditionCalculator from './components/Arithmetic/AdditionCalculator';
import SubtractionCalculator from './components/Arithmetic/SubtractionCalculator';
import MultiplicationCalculator from './components/Arithmetic/MultiplicationCalculator';
import DivisionCalculator from './components/Arithmetic/DivisionCalculator';
import AverageCalculator from './components/Arithmetic/AverageCalculator';
import ModulusCalculator from './components/Arithmetic/ModulusCalculator';
import PowerCalculator from './components/Arithmetic/PowerCalculator';

function App() {
  return (
    <Router>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#0f2027' // optional: dark background
      }}>
        <Navbar />

        <div style={{ flex: 1, paddingTop: '80px' }}>
          <Routes>
            {/* Home & Static Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Financial */}
            <Route path="/financial" element={<FinancialHome />} />
            <Route path="/simple-interest" element={<SimpleInterestCalculator />} />
            <Route path="/compound-interest" element={<CompoundInterestCalculator />} />
            <Route path="/currency" element={<CurrencyCalculator />} />
            <Route path="/salary" element={<SalaryCalculator />} />
            <Route path="/retirement" element={<RetirementCalculator />} />
            <Route path="/sales-tax" element={<SalesTaxCalculator />} />
            <Route path="/investment" element={<InvestmentCalculator />} />

            {/* Health */}
            <Route path="/health" element={<HealthHome />} />
            <Route path="/health/bmi" element={<BMICalculator />} />
            <Route path="/health/bmr" element={<BMRCalculator />} />
            <Route path="/health/calorie" element={<CalorieCalculator />} />
            <Route path="/health/body-fat" element={<BodyFatCalculator />} />
            <Route path="/health/ideal-weight" element={<IdealWeightCalculator />} />

            {/* Conversion */}
            <Route path="/conversion" element={<ConversionHome />} />
            <Route path="/conversion/age" element={<AgeCalculator />} />
            <Route path="/conversion/bill-tip" element={<BillTipCalculator />} />
            <Route path="/conversion/date" element={<DateCalculator />} />
            <Route path="/conversion/gpa" element={<GPACalculator />} />
            <Route path="/conversion/height" element={<HeightConverter />} />
            <Route path="/conversion/hour-to-minute-seconds" element={<HourToMinuteSeconds />} />
            <Route path="/conversion/length" element={<LengthConverter />} />
            <Route path="/conversion/password" element={<PasswordGenerator />} />

            {/* Geometry */}
            <Route path="/geometry" element={<GeometryHome />} />
            <Route path="/2d-distance" element={<Distance2DCalculator />} />
            <Route path="/3d-distance" element={<Distance3DCalculator />} />
            <Route path="/equilateral-triangle" element={<EquilateralTriangleCalculator />} />
            <Route path="/isosceles-triangle" element={<IsoscelesTriangleCalculator />} />
            <Route path="/right-angled-triangle" element={<RightAngledTriangleCalculator />} />
            <Route path="/cube" element={<CubeCalculator />} />
            <Route path="/cone" element={<ConeCalculator />} />
            <Route path="/circle" element={<CircleCalculator />} />
            <Route path="/cylinder" element={<CylinderCalculator />} />
            <Route path="/rectangle" element={<RectangleCalculator />} />
            <Route path="/square" element={<SquareCalculator />} />
            <Route path="/sphere" element={<SphereCalculator />} />

            {/* Algebra */}
            <Route path="/algebra" element={<AlgebraHome />} />
            <Route path="/complex-number" element={<ComplexNumberCalculator />} />
            <Route path="/boolean-algebra" element={<BooleanAlgebraSimplifier />} />
            <Route path="/partial-fraction" element={<PartialFractionDecomposer />} />
            <Route path="/inequality" element={<InequalityCalculator />} />
            <Route path="/flow-rate" element={<FlowRateCalculator />} />
            <Route path="/impulse" element={<ImpulseCalculator />} />
            <Route path="/factorization" element={<FactorizationCalculator />} />
            <Route path="/percentage" element={<PercentageCalculator />} />
            <Route path="/exponential-formulas" element={<ExponentialFormulasCalculator />} />
            <Route path="/cube-of-number" element={<CubeOfNumberCalculator />} />
            <Route path="/cube-root" element={<CubeRootCalculator />} />

            {/* Arithmetic */}
            <Route path="/arithmetic" element={<ArithmeticHome />} />
            <Route path="/addition" element={<AdditionCalculator />} />
            <Route path="/subtraction" element={<SubtractionCalculator />} />
            <Route path="/multiplication" element={<MultiplicationCalculator />} />
            <Route path="/division" element={<DivisionCalculator />} />
            <Route path="/average" element={<AverageCalculator />} />
            <Route path="/modulus" element={<ModulusCalculator />} />
            <Route path="/power" element={<PowerCalculator />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
