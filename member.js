function skillsMember() {
  const user = this;
  return {
    async getSkills() {
      const member = await user.getMember();
      return member.skills;
    },
    async addSkill({ name, level }) {
      const member = await user.getMember();
      member.skills.push({ name, level });
      await member.save();
    },
    async removeSkill(name) {
      const member = await user.getMember();
      member.skills = member.skills.filter((skill) => skill.name !== name);
      await member.save();
    },
  };
}