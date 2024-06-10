import { lessons, units } from "@/db/schema"
import LessonButton from "./LessonButton"
import UnitBanner from "./UnitBanner"

type UnitProps = {
    id: number
    order: number
    description: string
    title: string
    lessons: (typeof lessons.$inferSelect & {
        completed: boolean
    })[]
    activeLesson: typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect
    } | undefined
    activeLessonPercentage: number,
}



const Unit = ({
    activeLesson,
    activeLessonPercentage,
    description,
    id,
    lessons,
    order,
    title,
}: UnitProps) => {

    return (
        <>
            <UnitBanner title={title} description={description} />
            <div className="flex items-center flex-col relative">
                {lessons.map((lesson, index) => {
                    const isCurrent = lesson.id === activeLesson?.id
                    const isLocked = !lesson.completed && !isCurrent

                    return (
                        <LessonButton 
                        key={lesson.id}
                        id={lesson.id}
                        index={index}
                        totalCount={lessons.length -1}
                        current={isCurrent}
                        locked={isLocked}
                        percentage={activeLessonPercentage}
                        title={title}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Unit