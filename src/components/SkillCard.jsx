import { motion } from 'framer-motion'

export default function SkillCard({ skill, icon, percentage }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-tertiary p-6 rounded-lg relative overflow-hidden group"
    >
      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-secondary">{skill}</h3>
        <div className="w-full bg-primary/30 h-2 rounded-full">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-full bg-secondary rounded-full"
          />
        </div>
        <p className="mt-2 text-textSecondary">{percentage}%</p>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-secondary/5 rounded-lg"
      />
    </motion.div>
  )
}
