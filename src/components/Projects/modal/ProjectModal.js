import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProjectModal = ({ project }) => {
    const [open, setOpen] = useState(false)
    const lengthTools = project.tools.length - 1

    const showModal = () => {
        setOpen(true)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    return (
        <>
            <button
                className="cursor-pointer border border-slate-600 p-3 rounded-lg "
                onClick={showModal}
            >
                Information
            </button>

            <Modal
                title={<p className="text-lg font-semibold">{project.title}</p>}
                open={open}
                onCancel={handleCancel}
                footer={[
                    <Button key="back">
                        <Link target="_blank" rel="noopener noreferrer" to={project.url}>
                            Watch demo
                        </Link>
                    </Button>,
                ]}
            >
                <img src={project.image} alt="" className="w-full h-full max-w-7xl rounded-xl" />
                <p className="my-3 font-semibold text-justify italic">{project.description}</p>
                <p className="font-semibold text-justify italic">
                    Tech used:{' '}
                    {project.tools.map((tool) => (
                        <span key={tool.id}>
                            {tool.id === lengthTools ? `${tool.name}.` : `${tool.name}, `}
                        </span>
                    ))}
                </p>
            </Modal>
        </>
    )
}

export default ProjectModal
