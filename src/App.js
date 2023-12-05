import { Routes, Route } from "react-router-dom";

import HomePage from "./component/page/HomePage";
import OperationPolicyPage from "./component/page/OperationPolicyPage";
import SellGroupPage from "./component/page/SellGroupPage";
import GetAllSellGroup from "./intra/sellGroup/GetAllSellGroup";
import GyuPage from "./component/page/GyuPage";
import EducationPage from "./component/page/EducationPage";
import EducationStudentPage from "./component/page/EducationStudentPage";
import ContractManagementPolicyPage from "./component/page/ContractManagementPolicyPage";
import AdviceNoteModal from "./component/page/AdviceNoteModal";
import EmployeeRewardPage from "./component/page/EmployeeRewardPage";
import Register from "./user/customer/Register";
import AboutEducationPage from "./component/page/AboutEducationPage";
import ManageInsurancePlan from "./user/employee/insuranceDevelopment/ManageInsurancePlan";
import DesignInsurance from "./user/employee/insuranceDevelopment/DesignInsurance";
import LoginPage from "./component/page/LoginPage";
import GetAllCustomer from "./user/customer/GetAllCustomer";
import CampaignPlan from "./user/employee/marketing/CampaignPlan";
import GetPlanCampaign from "./user/employee/marketing/GetPlanCampaign";
import GetRunCampaign from "./user/employee/marketing/GetRunCampaign";
import GetEndCampaign from "./user/employee/marketing/GetEndCampaign";
import EstimateProfit from "./user/employee/insuranceDevelopment/EstimateProfit";
import AnalyzeInsuranceRate from "./user/employee/insuranceDevelopment/AnalyzeInsuranceRate";
import AuthorizeInsurance from "./user/employee/insuranceDevelopment/AuthorizeInsurance";
import RetrieveUserPersonas from "./intra/sellGroup/RetrieveUserPersonas";
import CreateUserPersona from "./intra/sellGroup/CreateUserPersona";
import PlanSalesPlan from "./intra/sellGroup/PlanSalesPlan";
import RegisterPage from "./component/page/RegisterPage";
import InsuranceDevelopmentPage from "./component/page/InsuranceDevelopmentPage";
import CreateInsurancePlan from "./user/employee/insuranceDevelopment/CreateInsurancePlan";
import PlanProductPage from "./component/page/PlanProductPage";
import RetrieveReports from "./user/employee/insuranceDevelopment/RetrieveReports";
import RetrievePlannedInsurances from "./user/employee/insuranceDevelopment/RetrievePlannedInsurances";
import SalesPlanPage from "./component/page/SalesPlanPage";
import ProcessSalesPage from "./component/page/ProcessSalesPage";
import RetrieveAppliedCounselingCustomers from "./intra/sellGroup/RetrieveAppliedCounselingCustomers";
import RetrieveCustomerCounselingsByCustomerID from "./intra/sellGroup/RetrieveCustomerCounselingsByCustomerID";
import RetrieveAcceptedApplyCounselingCustomers from "./intra/sellGroup/RetrieveAcceptedApplyCounselingCustomers";
import UpdateCustomerInformation from "./intra/sellGroup/UpdateCustomerInformation";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/regsiter" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/operationPolicy" element={<OperationPolicyPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/getAllCustomer" element={<GetAllCustomer />} />
        <Route path="/sellGroup" element={<SellGroupPage />} />
        <Route path="/sellGroup/getAll" element={<GetAllSellGroup />} />
        <Route path="/sellGroup/recommend" element={<recommendInsurance />} />

        <Route path="/gyu" element={<GyuPage />} />
        <Route path="/educationPage" element={<EducationPage />} />
        <Route path="/aboutEducationPage" element={<AboutEducationPage />} />
        <Route
          path="/educationStudentPage"
          element={<EducationStudentPage />}
        />
        <Route path="/adviceNoteModal" element={<AdviceNoteModal />} />
        <Route path="/employeeRewardPage" element={<EmployeeRewardPage />} />
        <Route
          path="/contractManagementPolicyPage"
          element={<ContractManagementPolicyPage />}
        />
        <Route
          path="/insuranceDevelopmentPage"
          element={<InsuranceDevelopmentPage />}
        />
        <Route path="/planProductPage" element={<PlanProductPage />} />
        <Route path="/processSalesPage" element={<ProcessSalesPage />} />
        <Route path="/salesPlanPage" element={<SalesPlanPage />} />

        <Route path="/manageInsurancePlan" element={<ManageInsurancePlan />} />
        <Route path="/designInsurance" element={<DesignInsurance />} />
        <Route path="/campaignPlan" element={<CampaignPlan />} />
        <Route path="/getPlanCampaign" element={<GetPlanCampaign />} />
        <Route path="/getRunCampaign" element={<GetRunCampaign />} />
        <Route path="/getEndCampaign" element={<GetEndCampaign />} />
        <Route path="/estimateProfit" element={<EstimateProfit />} />
        <Route
          path="/analyzeInsuranceRate"
          element={<AnalyzeInsuranceRate />}
        />
        <Route path="/authorizeInsurance" element={<AuthorizeInsurance />} />
        <Route
          path="/retrieveUserPersonas"
          element={<RetrieveUserPersonas />}
        />
        <Route path="/createUserPersona" element={<CreateUserPersona />} />
        <Route path="/planSalesPlan" element={<PlanSalesPlan />} />
        <Route path="/createInsurancePlan" element={<CreateInsurancePlan />} />
        <Route path="/retrieveReports" element={<RetrieveReports />} />
        <Route
          path="/retrievePlannedInsurances"
          element={<RetrievePlannedInsurances />}
        />
        <Route
          path="/retrieveAppliedCounselingCustomers"
          element={<RetrieveAppliedCounselingCustomers />}
        />
        <Route
          path="/retrieveCustomerCounselingsByCustomerID"
          element={<RetrieveCustomerCounselingsByCustomerID />}
        />
        <Route
          path="/retrieveAcceptedApplyCounselingCustomers"
          element={<RetrieveAcceptedApplyCounselingCustomers />}
        />
        <Route
          path="/updateCustomerInformation"
          element={<UpdateCustomerInformation />}
        />
      </Routes>
    </>
  );
};
export default App;
