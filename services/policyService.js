const Policy = require("../models/Policy");
const User = require("../models/User");

const searchPolicyByUser = async (username) => {
  const user = await User.findOne({ firstName: username });
  if (!user) throw new Error("User not found");

  return await Policy.find({ userId: user._id }).populate(
    "policyCategory companyId"
  );
};

const aggregatePoliciesByUser = async () => {
  return await Policy.aggregate([
    {
      $group: {
        _id: "$userId",
        totalPolicies: { $sum: 1 },
      },
    },
  ]);
};

module.exports = { searchPolicyByUser, aggregatePoliciesByUser };
