

import { useState } from "react";
import { Button, Stack } from "react-bootstrap";

export function TrafficLights() {
    const [lights, setLigths] = useState("red");


    return (
        <>
            <Stack className="justify-content-center black h-50" gap={3} direction="vertical">
                <Button className="lights rounded-circle" variant="danger"></Button>
                <Button className="lights rounded-circle" variant="warning"></Button>
                <Button className="lights rounded-circle" variant="success"></Button>
            </Stack>
        </>
    )
}